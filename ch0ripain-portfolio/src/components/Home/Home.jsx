import HomeButtonSectionIcon from "./HomeButtonSectionIcon";
import HomeButtonSection from "./HomeButtonSection";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText);

export default function Home() {
  const homeRef = useRef(null);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      // split elements with the class "split" into words and characters
      let split = SplitText.create(".split", { type: "words, chars, lines" });
      let tl = gsap.timeline();

      // Remover clases Tailwind que ocultan
      document.querySelectorAll(".split").forEach((el) => {
        el.classList.remove("opacity-0", "invisible");
      });

      tl.set(split.words, { autoAlpha: 0 }) // iniciar oculto
        .to(split.words, { autoAlpha: 0, duration: 1 }) // mantener oculto por 2 segundos
        .from(split.words, {
          y: 50,
          autoAlpha: 0,
          stagger: 0.05,
        });
      gsap.to(homeRef.current, {
        x: "-12vw",
        duration: 1,
        ease: "expo.inOut",
        delay: 3.3,
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
        .to(homeRef.current, {
          x: "0vw",
          ease: "slow(0.7,0.7,false)",
        });
    });
  });

  return (
    <section
      id="home"
      className="flex min-h-[85svh] w-full scroll-mt-36 flex-row justify-center pb-[5%]"
    >
      <div
        ref={homeRef}
        className="flex flex-1 flex-col items-center justify-center px-[2%] md:max-w-9/12"
      >
        <div className="flex w-full flex-row items-center justify-center">
          <h2 className="split invisible text-title opacity-0">
            Leandro
            <span className="font-playfair-display"> Rufino</span>
          </h2>
        </div>
        <div className="flex w-full flex-row items-center justify-center">
          <h3 className="split invisible text-subtitle opacity-0">
            <span className="font-playfair-display">Frontend </span>
            Developer
          </h3>
        </div>
        <HomeButtonSection>
          <HomeButtonSectionIcon
            url={"https://github.com/ch0ripain"}
            animate="animate-fade-in animate-duration-500 animate-delay-[2.7s]"
            name="github"
          />
          <HomeButtonSectionIcon
            url={"#educacion"}
            animate="animate-fade-in animate-duration-500 animate-delay-[2.9s]"
            name="email"
            target="_self"
          />
          <HomeButtonSectionIcon
            url={"https://www.linkedin.com/in/leorufino/"}
            animate="animate-fade-in animate-duration-500 animate-delay-[3.1s]"
            name="linkedin"
          />
          <HomeButtonSectionIcon
            url={"/CV-Leandro_Rufino.pdf"}
            animate="animate-fade-in animate-duration-500 animate-delay-[3.3s]"
            name="cv"
          />
        </HomeButtonSection>
      </div>
    </section>
  );
}
