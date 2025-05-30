import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const educationRef = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          scroller: "#scroller",
          trigger: "#educacion",
          start: "top bottom",
          end: "55% 60%",
          scrub: true,
        },
      })
      .to(educationRef.current, { x: "10vw", ease: "slow(0.7,0.7,false)" });
    gsap.timeline({
      scrollTrigger: {
        scroller: "#scroller",
        trigger: "#educacion",
        start: "bottom bottom",
        end: "center bottom",
      },
    });
  });
  return (
    <section
      id="educacion"
      className="mb-[5%] flex min-h-[80svh] scroll-mt-28 flex-row justify-center"
    >
      <div
        ref={educationRef}
        className="w-full rounded-3xl bg-white/5 backdrop-blur-sm lg:max-w-8/12"
      >
        <h1 className="font-orbitron text-center text-title uppercase">
          Educación
        </h1>
      </div>
    </section>
  );
}
