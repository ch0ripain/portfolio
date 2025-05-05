import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function YoshiScene() {
  const group = useRef();
  const { scene, animations } = useGLTF("/yoshi.glb");
  const { actions, mixer } = useAnimations(animations, group);
  // GSAP Storyline
  useEffect(() => {
    // Reproducir la animación por defecto al montar el componente
    if (actions) {
      // Nombre de la animación
      const firstAnimation = Object.values(actions)[0];
      // Establecer la velocidad de la animación
      firstAnimation.timeScale = 0.4;
      firstAnimation?.play();
    }
    if (group.current) {
      group.current.rotation.x = 0;
      group.current.rotation.y = 0;
    }
    gsap.set(group.current.position, { x: 4, y: 5 });
    gsap.to(group.current.position, {
      duration: 4,
      ease: "expo.inOut",
      y: -1.5,
      delay: 4,
    });
    gsap
      .timeline({
        scrollTrigger: {
          scroller: "#scroller",
          trigger: "#home",
          start: "top 10%",
          end: "bottom center",
          scrub: true,
        },
      })
      .to(group.current.position, {
        x: 10,
        y: 1,
        ease: "slow(0.7,0.7,false)",
      });
    gsap.timeline({
      scrollTrigger: {
        scroller: "#scroller",
        trigger: "#skills",
        start: "top center",
        end: "center center",
        scrub: true,
        onLeave: () => {
          gsap.set(group.current.position, { x: -12, y: -1 });
        },
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          scroller: "#scroller",
          trigger: "#skills",
          start: "top top",
          end: "bottom top",
          scrub: "true",
        },
      })
      .to(group.current.position, { x: -4, y: -1.5 });
    gsap
      .timeline({
        scrollTrigger: {
          scroller: "#scroller",
          trigger: "#educacion",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      })
      .to(group.current.rotation, { y: 6 });
  }, [actions]);

  // Actualizar el mixer en cada frame para que la animación avance
  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return <primitive ref={group} object={scene} scale={7} />;
}

export default function YoshiModel() {
  return createPortal(
    <Canvas>
      <ambientLight intensity={1.3} />
      <YoshiScene />
    </Canvas>,
    document.getElementById("three-canvas-container"),
  );
}
