import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { forwardRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";

const fragmentShader = `
uniform float iTime;
uniform vec2 iResolution;
uniform sampler2D iChannel0;
uniform float scroll;

// COLOR DE FONDO
vec3 C = vec3(0.5, 0.015, 0.2); 

float GWM = 2.05;            // Intensidad base de las waves
float TM = 0.25;            // Velocidad de variación en el tiempo

// Devuelve amplitud de una frecuencia dada (simula espectro de audio)
float getAmp(float frequency) {
    return texture(iChannel0, vec2(frequency / 512.0, 0.0)).x;
}

float getWeight(float f) {
    return (getAmp(f - 2.0) + getAmp(f - 1.0) + 
            getAmp(f + 2.0) + getAmp(f + 1.0) + 
            getAmp(f)) / 5.0;
}

// Rota el UV según el scroll 
vec2 rotateUV(vec2 uv, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    mat2 rot = mat2(c, -s, s, c);
    return rot * (uv - 0.5) + 0.5;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {    
    vec3 backdrop = C; 
    vec2 uvTrue = fragCoord.xy / iResolution.xy;
    vec2 rotatedUV = rotateUV(uvTrue, scroll * 0.001); // Rotación basada en scroll
    vec2 uv = 2.0 * rotatedUV - 1.0;
    
    float li;
    float gw;
    float ts;
    vec3 color = vec3(0.0);
    
    for(float i = 0.0; i < 5.0; i++) {
        uv.y += (0.2 * sin(uv.x + i / 7.0 - iTime * 0.6));
        float Y = uv.y + getWeight(pow(i, 2.0) * 20.0) * (texture(iChannel0, vec2(rotatedUV.x, 1.0)).x - 0.5);
        li = 0.4 + pow(1.6 * abs(mod(rotatedUV.x + i / 1.1 + iTime, 2.0) - 1.0), 2.0);
        gw = abs(li / (150.0 * Y));
        
        ts = gw * (GWM + sin(iTime * TM));

        //COLOR DE LAS WAVES
         color += vec3(ts, ts * 0.2, ts * 0.5);

    }	

    fragColor = vec4(color + backdrop * 0.3, 0.6); // Mezcla el fondo con las ondas y aplica opacidad final
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const ShaderMaterial = ({ scroll }) => {
  const meshRef = useRef();
  const { size } = useThree();
  const smoothScroll = useRef(0); // <- Valor suavizado

  const uniforms = useRef({
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector2(size.width, size.height) },
    iChannel0: {
      value: new THREE.DataTexture(
        new Float32Array(512 * 1 * 4),
        512,
        1,
        THREE.RGBAFormat,
      ),
    },
    scroll: { value: 0 },
  });

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Suavizar el scroll con LERP
      const target = parseFloat(scroll);
      smoothScroll.current += (target - smoothScroll.current) * 0.1; // LERP con t = 0.1
      // Actualizar shaders
      meshRef.current.material.uniforms.iTime.value = clock.getElapsedTime();
      meshRef.current.material.uniforms.scroll.value = smoothScroll.current;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
        uniforms={uniforms.current}
        transparent
      />
    </mesh>
  );
};

const Shader = forwardRef(function Shader(props, ref) {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const scroller = ref.current;

    const handleScroll = () => {
      const scrollValue = scroller.scrollTop.toFixed(2);

      if (Math.abs(scrollValue - scrollPosition) >= 50) {
        setScrollPosition(scrollValue);
      }
    };

    scroller.addEventListener("scroll", handleScroll);
    return () => {
      scroller.removeEventListener("scroll", handleScroll);
    };
  }, [ref, scrollPosition]);
  return createPortal(
    <Canvas>
      <ShaderMaterial scroll={scrollPosition} />
    </Canvas>,
    document.getElementById("background"),
  );
});

export default Shader;
