import { useRef, useEffect } from "react";
import HomeSVG from "../common/SVG/Navbar/HomeSVG";
import SkillSVG from "../common/SVG/Navbar/SkillsSVG";
import ExperienceSVG from "../common/SVG/Navbar/ExperienceSVG";
import EducationSVG from "../common/SVG/Navbar/EducationSVG";

const SVG_TYPES = {
  home: HomeSVG,
  skills: SkillSVG,
  experiencia: ExperienceSVG,
  educacion: EducationSVG,
};

export default function NavbarItem({
  isSelected,
  name,
  setSelected,
  setPosition,
}) {
  const activeTabRef = useRef(null);
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const activeTab = document.getElementById(`${id}Link`);
          if (!activeTab) return;

          const { width } = activeTab.getBoundingClientRect();
          setPosition({
            left: activeTab.offsetLeft,
            width,
            opacity: 1,
          });
          setSelected(id);
        }
      });
    };

    const observerOptions = {
      threshold: 0.8,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = ["home", "skills", "experiencia", "educacion"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [setPosition, setSelected]);

  const strokeSvgColor = isSelected ? "#C71585" : "#FFF";
  const IconSVG = SVG_TYPES[name];

  return (
    <li className={`group mx-1 flex flex-1 flex-row place-content-center`}>
      <a
        id={`${name}Link`}
        ref={activeTabRef}
        href={"#" + name}
        className={`relative flex min-h-8 cursor-pointer flex-row place-items-center justify-center hover:bg-white/10 sm:flex-1 ${isSelected ? "space-x-1" : "sm:space-x-1"} rounded-3xl px-4 py-1`}
      >
        <IconSVG stroke={strokeSvgColor} />
        {isSelected ? (
          <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        ) : (
          <p className="hidden sm:block">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
        )}
      </a>
    </li>
  );
}
