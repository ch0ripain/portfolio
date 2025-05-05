import Lottie from "react-lottie";
import animationsData from "../../../assets/lotties/index";

export default function IconButton({
  url,
  height = 30,
  width = 30,
  animate,
  lottie,
}) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationsData[lottie],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <button className={animate}>
      <a
        href={url}
        target={`${url.includes("#") ? "_self" : "_blank"}`}
        rel="noopener noreferrer"
      >
        <Lottie options={defaultOptions} height={height} width={width} />
      </a>
    </button>
  );
}
