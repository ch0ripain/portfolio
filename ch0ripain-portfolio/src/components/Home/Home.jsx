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
    });
  }, []);
  return (
    <section
      id="home"
      className="flex min-h-[70dvh] scroll-mt-36 flex-row text-center"
    >
      <div className="flex flex-1 flex-col items-center justify-center px-[2%] md:max-w-8/12">
        <div className="split w-full">
          <h1 className="text-title">
            Leandro
            <span className="font-playfair-display"> Rufino</span>
          </h1>
        </div>
        <div className="split w-full">
          <h1 className="text-subtitle">
            <span className="font-playfair-display">Frontend </span>
            Developer
          </h1>
        </div>
        <IconButtonSection>
          <IconButton
            src="https://lottie.host/75789d7a-e29b-4d02-9546-d440b8c5a1de/wVvuX385lL.lottie"
            url={"https://github.com/ch0ripain"}
          />
          <IconButton
            src="https://lottie.host/2142fbe2-05e4-4ac8-85d9-2f1ee648ffcc/Y0uzJvDCF4.lottie"
            url={"#contacto"}
          />
          <IconButton
            src="https://lottie.host/8f4e643f-d845-4829-9ea2-2662e6c04290/DHHdqg0hzT.lottie"
            url={"https://www.linkedin.com/in/leorufino/"}
          />
        </IconButtonSection>
      </div>
    </section>
  );
}
