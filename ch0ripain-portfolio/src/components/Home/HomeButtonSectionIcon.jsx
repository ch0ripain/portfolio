import GsapMagnetic from "../Animations/GsapMagnetic";
import GithubSVG from "../common/SVG/Home/GithubSVG";
import LinkedinSVG from "../common/SVG/Home/LinkedinSVG";
import EmailSVG from "../common/SVG/Home/EmailSVG";
import CvSVG from "../common/SVG/Home/CvSVG";

const SVG_TYPES = {
  github: GithubSVG,
  linkedin: LinkedinSVG,
  email: EmailSVG,
  cv: CvSVG,
};

export default function HomeButtonSectionIcon({
  url,
  animate,
  name,
  target = "_blank",
}) {
  const IconSVG = SVG_TYPES[name];
  return (
    <GsapMagnetic>
      <button className={animate}>
        <a href={url} target={target} rel="noopener noreferrer">
          <IconSVG />
        </a>
      </button>
    </GsapMagnetic>
  );
}
