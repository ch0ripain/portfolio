import GsapMagnetic from "../Animations/GsapMagnetic";
import JavascriptSVG from "../common/SVG/Skills/JavascriptSVG";
import TypescriptSVG from "../common/SVG/Skills/TypescriptSVG";
import ReactSVG from "../common/SVG/Skills/ReactSVG";
import HtmlSVG from "../common/SVG/Skills/HtmlSVG";
import CssSVG from "../common/SVG/Skills/CssSVG";
import TailwindSVG from "../common/SVG/Skills/TailwindSVG";
import NextSVG from "../common/SVG/Skills/NextSVG";
import FigmaSVG from "../common/SVG/Skills/FigmaSVG";

const SVG_TYPES = {
  javascript: JavascriptSVG,
  typescript: TypescriptSVG,
  react: ReactSVG,
  html: HtmlSVG,
  css: CssSVG,
  tailwind: TailwindSVG,
  nextjs: NextSVG,
  figma: FigmaSVG,
};

const SKILLS = [
  {
    styles:
      "col-start-1 row-start-1 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-700 via-yellow-400 to-yellow-300 hover:animate-[squeeze_0.5s_ease]",
    name: "javascript",
  },
  {
    styles:
      "col-span-2 col-start-2 row-span-2 row-start-1 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-bl from-cyan-900 via-cyan-700 to-cyan-300 hover:animate-[squeeze_0.5s_ease]",
    name: "react",
  },
  {
    styles:
      "col-start-1 row-start-2 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 hover:animate-[squeeze_0.5s_ease]",
    name: "typescript",
  },
  {
    styles:
      "col-span-2 col-start-1 row-start-3 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-tr bg-black hover:animate-[tilt_0.5s_ease]",
    name: "nextjs",
  },
  {
    styles:
      "col-start-3 row-start-3 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-tl from-orange-700 via-orange-400 to-orange-200 hover:animate-[squeeze_0.5s_ease]",
    name: "html",
  },
  {
    styles:
      "col-start-1 row-start-4 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-tr from-pink-900 via-pink-700 to-pink-300 hover:animate-[squeeze_0.5s_ease]",
    name: "figma",
  },
  {
    styles:
      "col-start-2 row-start-4 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-t from-teal-900 via-teal-700 to-teal-300 hover:animate-[squeeze_0.5s_ease]",
    name: "tailwind",
  },
  {
    styles:
      "col-start-3 row-start-4 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-tl from-blue-900 via-blue-700 to-blue-300 hover:animate-[squeeze_0.5s_ease]",
    name: "css",
  },
];

const Skill = ({ tw, name = "javascript" }) => {
  const IconSvg = SVG_TYPES[name];

  return (
    <div className={`${tw} relative`}>
      <GsapMagnetic duration={2}>
        <div
          className={"flex h-full w-full flex-col items-center justify-center"}
        >
          <IconSvg />
        </div>
      </GsapMagnetic>
    </div>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex h-[80svh] w-full scroll-mt-28 flex-row justify-center"
    >
      <div className="h-[60svh] w-full rounded-3xl bg-white/5 backdrop-blur-sm md:min-h-full md:max-w-5/12">
        <div className="grid h-full grid-cols-3 grid-rows-4 gap-4 p-4">
          {SKILLS.length > 0 &&
            SKILLS.map((skill, index) => {
              return <Skill key={index} tw={skill.styles} name={skill.name} />;
            })}
        </div>
      </div>
    </section>
  );
}
