import Lottie from "react-lottie";
import animationsData from "../../assets/lotties/index";
import nextImg from "../../assets/nextjs.webp";
import GsapMagnetic from "../Animations/GsapMagnetic";

const SKILLS = [
  {
    styles:
      "col-start-1 row-start-1 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-700 via-yellow-400 to-yellow-300 hover:animate-[squeeze_0.5s_ease]",
    label: "",
    iconClass: "bx bxl-javascript",
  },
  {
    styles:
      "col-span-2 col-start-2 row-span-2 row-start-1 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-bl from-cyan-900 via-cyan-700 to-cyan-300",
    label: "React",
    // iconClass: "bx bxl-react",
    lottie: 0,
  },
  {
    styles:
      "col-start-1 row-start-2 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 hover:animate-[squeeze_0.5s_ease]",
    label: "",
    iconClass: "bx bxl-typescript",
  },
  {
    styles:
      "col-span-2 col-start-1 row-start-3 flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-tr from-black to-black hover:animate-[tilt_0.5s_ease]",
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
    // iconClass: "bx bxl-figma",
    lottie: 1,
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

const Skill = ({ tw, iconClass, lottie }) => {
  let skill = <p>Cargando icono :p</p>;
  if (lottie >= 0) {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationsData[lottie],
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    skill = (
      <Lottie
        options={defaultOptions}
        speed={0.7}
        height={`${lottie === 0 ? "65%" : "90%"}`}
        width={`${lottie === 0 ? "50%" : "65%"}`}
      />
    );
  } else {
    skill = (
      <GsapMagnetic>
        <div className="flex h-full w-full flex-col items-center justify-center">
          {iconClass.includes("img") ? (
            <img
              src={nextImg}
              className="h-[75%] w-[90%] mix-blend-color-dodge"
            />
          ) : (
            <i className={`${iconClass} text-7xl sm:text-8xl`}></i>
          )}
        </div>
      </GsapMagnetic>
    );
  }
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
      <div className="h-full w-full rounded-3xl bg-white/5 backdrop-blur-sm md:max-w-4/12">
        <div className="grid h-full grid-cols-3 grid-rows-4 gap-4 p-4">
          {SKILLS.length > 0 &&
            SKILLS.map((skill, index) => {
              return (
                <Skill
                  key={index}
                  tw={skill.styles}
                  iconClass={skill.iconClass}
                  lottie={skill?.lottie}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
