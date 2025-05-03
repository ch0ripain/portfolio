import "boxicons/css/boxicons.min.css";
import IconButtonSection from "../common/Button/IconButtonSection";
import IconButton from "../common/Button/IconButton";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
gsap.registerPlugin(SplitText);

export default function Home() {
  useEffect(() => {
    // split elements with the class "split" into words and characters
    let split = SplitText.create(".split", { type: "words, chars, lines" });

    // now animate the characters in a staggered fashion
    gsap.from(split.words, {
      y: 50, // animate from 100px below
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.05, // 0.05 seconds between each
      delay: 1,
    });
  }, []);
  return (
    <section
      id="home"
      className="flex min-h-[80dvh] scroll-mt-36 flex-row pb-[5%]"
    >
      <div className="flex flex-1 flex-col items-center justify-center px-[2%] md:max-w-8/12">
        <div className="split flex w-full flex-row items-center justify-center">
          <h2 className="text-title">
            Leandro
            <span className="font-playfair-display"> Rufino</span>
          </h2>
        </div>
        <div className="split flex w-full flex-row items-center justify-center">
          <h3 className="text-subtitle">
            <span className="font-playfair-display">Frontend </span>
            Developer
          </h3>
        </div>
        <IconButtonSection>
          <IconButton
            src="https://lottie.host/972350a9-a4eb-49cd-bbfa-e8e27fd41d7a/J1AZeJ6wk4.lottie"
            url={"https://github.com/ch0ripain"}
            animate="animate-[fadeIn_2s_ease-in-out]"
          />
          <IconButton
            src="https://lottie.host/2142fbe2-05e4-4ac8-85d9-2f1ee648ffcc/Y0uzJvDCF4.lottie"
            url={"#contacto"}
            animate="animate-[fadeIn_3s_ease-in-out]"
          />
          <IconButton
            src="https://lottie.host/ce62e397-8d42-48a6-ac98-5e127eaf2968/PpJuJ1wUYg.lottie"
            url={"https://www.linkedin.com/in/leorufino/"}
            animate="animate-[fadeIn_4s_ease-in-out]"
          />
        </IconButtonSection>
      </div>
    </section>
  );
}
