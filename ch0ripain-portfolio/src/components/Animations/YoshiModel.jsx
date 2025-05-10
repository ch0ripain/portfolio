import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function YoshiScene() {
  const group = useRef();
  const { scene, animations } = useGLTF("/yoshi.glb");
  const { actions, mixer } = useAnimations(animations, group);
  // GSAP Storyline
  useGSAP(() => {
    if (!group.current || !actions) return;

    const yoshi = group.current;
    const firstAnimation = Object.values(actions)[0];

    firstAnimation.timeScale = 0.4;
    firstAnimation.play();

    // Posición inicial
    gsap.set(yoshi.position, { x: 4, y: 5 });
    gsap.set(yoshi.rotation, { x: 0, y: 0 });

    // Entrada inicial
    gsap.to(yoshi.position, {
      duration: 4,
      ease: "expo.inOut",
      y: -1.5,
      delay: 2,
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
      .to(yoshi.position, {
        x: 10,
        y: 0.5,
        ease: "slow(0.7,0.7,false)",
      })
      .to(yoshi, { visible: false });
    gsap.timeline({
      scrollTrigger: {
        scroller: "#scroller",
        trigger: "#skills",
        start: "top center",
        end: "center center",
        scrub: true,
        onLeave: () => {
          gsap.set(yoshi.position, { x: -14, y: -1 });
          gsap.set(yoshi, { visible: true });
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
          scrub: true,
        },
      })
      .to(yoshi.position, { x: -4, y: -1.5 });
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
      .to(yoshi.rotation, { y: 6 });
  });

  // Actualizar el mixer en cada frame para que la animación avance
  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return <primitive ref={group} object={scene} scale={7} />;
}

export default function YoshiModel() {
  const [showModel, setShowModel] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModel(true);
    }, 3300);
    return () => clearTimeout(timeout);
  }, []);
  return createPortal(
    <Canvas style={{ visibility: showModel ? "visible" : "hidden" }}>
      <ambientLight intensity={1.3} />
      <YoshiScene />
    </Canvas>,
    document.getElementById("three-canvas-container"),
  );
}
