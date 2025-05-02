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

  useEffect(() => {
    // Reproducir la animación por defecto al montar el componente
    if (actions) {
      // Nombre de la animación
      const firstAnimation = Object.values(actions)[0];
      // Establecer la velocidad de la animación
      firstAnimation.timeScale = 0.5;
      firstAnimation?.play();
    }
    if (group.current) {
      group.current.rotation.x = 0;
    }
  }, [actions]);

  // Actualizar el mixer en cada frame para que la animación avance
  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  // GSAP Storyline
  useEffect(() => {
    gsap.set(group.current.position, { x: 3, y: -1 });
    gsap
      .timeline({
        scrollTrigger: {
          scroller: "#scroller",
          trigger: "#skills",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      })
      .to(group.current.rotation, { y: 6 })
      .to(group.current.position, { x: -4, y: -1 });

    gsap
      .timeline({
        scrollTrigger: {
          scroller: "#scroller",
          trigger: "#experiencia",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      })
      .to(group.current.rotation, { x: -0.5 })
      .to(group.current.rotation, { x: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          scroller: "#scroller",
          trigger: "#educación",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      })
      .to(group.current.rotation, { y: 0 })
      .to(group.current.position, { x: 4, y: -1.5 });
  }, []);

  return <primitive ref={group} object={scene} scale={5.5} />;
}

export default function YoshiModel() {
  return createPortal(
    <Canvas>
      <ambientLight intensity={1} />
      <YoshiScene />
    </Canvas>,
    document.getElementById("three-canvas-container"),
  );
}
