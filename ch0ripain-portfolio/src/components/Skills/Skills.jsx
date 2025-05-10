import nextImg from "../../assets/nextjs.webp";
import figmaImg from "../../assets/figma.webp";
import GsapMagnetic from "../Animations/GsapMagnetic";

const SKILLS = [
  {
    styles:
      "col-start-1 row-start-1 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-700 via-yellow-400 to-yellow-300 hover:animate-[squeeze_0.5s_ease]",
    label: "JavaScript",
    iconClass: "bx bxl-javascript",
  },
  {
    styles:
      "col-span-2 col-start-2 row-span-2 row-start-1 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-bl from-cyan-900 via-cyan-700 to-cyan-300",
    label: "React",
    iconClass: "bx bxl-react text-[7rem] sm:text-[12rem]",
  },
  {
    styles:
      "col-start-1 row-start-2 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 hover:animate-[squeeze_0.5s_ease]",
    label: "TypeScript",
    iconClass: "bx bxl-typescript",
  },
  {
    styles:
      "col-span-2 col-start-1 row-start-3 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-tr bg-black hover:animate-[tilt_0.5s_ease]",
    label: "NextJS",
    iconClass: "img",
  },
  {
    styles:
      "col-start-3 row-start-3 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-tl from-orange-700 via-orange-400 to-orange-200 hover:animate-[squeeze_0.5s_ease]",
    label: "HTML",
    iconClass: "bx bxl-html5",
  },
  {
    styles:
      "col-start-1 row-start-4 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-tr from-pink-900 via-pink-700 to-pink-300",
    label: "Figma",
    iconClass: "img",
  },
  {
    styles:
      "col-start-2 row-start-4 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-t from-teal-900 via-teal-700 to-teal-300",
    label: "TailwindCSS",
    iconClass: "bx bxl-tailwind-css animate-[tada_3s_ease-in-out_infinite]",
  },
  {
    styles:
      "col-start-3 row-start-4 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-tl from-blue-900 via-blue-700 to-blue-300",
    label: "CSS",
    iconClass: "bx bxl-css3 animate-[jelly_2s_ease-in-out_infinite]",
  },
];

const Skill = ({ tw, iconClass, label }) => {
  const imgSkill =
    label === "Figma" ? (
      <img src={figmaImg} alt="Figma Logo" className="h-auto w-full" />
    ) : (
      <img src={nextImg} alt="NextJS Logo" className="h-auto w-full" />
    );
  let skill = (
    <GsapMagnetic duration={2}>
      <div
        className={`flex h-full w-full flex-col items-center justify-center ${iconClass.includes("img") ? "p-6 sm:p-12" : undefined}`}
      >
        {iconClass.includes("img") ? (
          imgSkill
        ) : (
          <i className={`${iconClass} text-7xl sm:text-8xl`}></i>
        )}
      </div>
    </GsapMagnetic>
  );
  return (
    <div className={`${tw} relative`}>
      {/* <span className="absolute bottom-0 mx-auto">{label}</span> */}
      {skill}
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
              return (
                <Skill
                  key={index}
                  tw={skill.styles}
                  iconClass={skill.iconClass}
                  label={skill.label}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
