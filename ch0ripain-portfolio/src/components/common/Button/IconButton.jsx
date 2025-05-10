import GsapMagnetic from "../../Animations/GsapMagnetic";

const ICONS = {
  linkedin: { src: "/icons/linkedin.webp", alt: "Linkedin Icon Logo" },
  github: { src: "/icons/github.webp", alt: "GitHub Icon Logo" },
  email: { src: "/icons/email.webp", alt: "Email Icon Logo" },
};

export default function IconButton({ url, animate, name, target = "_blank" }) {
  const { src, alt } = ICONS[name];
  return (
    <GsapMagnetic>
      <button className={animate}>
        <a href={url} target={target} rel="noopener noreferrer">
          <img src={src} alt={alt} width={32} />
        </a>
      </button>
    </GsapMagnetic>
  );
}
