import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function IconButton({
  url,
  src,
  height = 30,
  width = 30,
  animate,
}) {
  return (
    <button className={animate}>
      <a
        href={url}
        target={`${url.includes("#") ? "_self" : "_blank"}`}
        rel="noopener noreferrer"
      >
        <DotLottieReact src={src} loop autoplay height={height} width={width} />
      </a>
    </button>
  );
}
