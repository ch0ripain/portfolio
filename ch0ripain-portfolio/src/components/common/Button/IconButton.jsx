import { useRef } from "react";
import Lottie from "react-lottie";
import animationsData from "../../../assets/lotties/index";
import GsapMagnetic from "../../Animations/GsapMagnetic";

export default function IconButton({
  url,
  height = 30,
  width = 30,
  animate,
  lottie,
}) {
  const lottieRef = useRef(null);
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationsData[lottie],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleMouseEnter = () => {
    if (lottieRef.current) {
      lottieRef.current.stop();
      lottieRef.current.play();
    }
  };

  return (
    <GsapMagnetic>
      <button className={animate}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
        >
          <Lottie
            options={defaultOptions}
            height={height}
            width={width}
            isClickToPauseDisabled
            ref={lottieRef}
          />
        </a>
      </button>
    </GsapMagnetic>
  );
}
