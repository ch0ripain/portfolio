import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const experienceRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <section
      id="experiencia"
      className="flex min-h-[80dvh] scroll-mt-28 flex-row justify-center"
    >
      <div ref={experienceRef} className="w-full bg-white/5 lg:max-w-8/12">
        <h1 className="font-orbitron text-center text-title uppercase">
          Proyectos
        </h1>
      </div>
    </section>
  );
}
