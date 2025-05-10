import { gsap } from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const experienceRef = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          scroller: "#scroller",
          trigger: "#experiencia",
          scrub: true,
          start: "top bottom",
          end: "center center",
        },
      })
      .to(experienceRef.current, { x: "10vw", ease: "slow(0.7,0.7,false)" });
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
      .to(experienceRef.current, {
        x: "0vw",
        ease: "slow(0.7,0.7,false)",
      });
  });

  return (
    <section
      id="experiencia"
      className="flex min-h-[80dvh] scroll-mt-28 flex-row justify-center"
    >
      <div
        ref={experienceRef}
        className="w-full rounded-3xl bg-white/5 backdrop-blur-sm lg:max-w-8/12"
      >
        <h1 className="font-orbitron text-center text-title uppercase">
          Proyectos
        </h1>
      </div>
    </section>
  );
}
