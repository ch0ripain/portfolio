import { useState } from "react";
import NavItem from "./NavItem";
import { motion } from "motion/react";

const NAV_TABS = [
  {
    label: "Home",
    fadeIn: "animate-[fadeIn_1s_ease-in-out]",
    twIcon: "bx bxs-hot -alt-2 group-hover:text-icon-orange",
    twIconActive: "text-icon-orange",
  },
  {
    label: "Skills",
    fadeIn: "animate-[fadeIn_1.5s_ease-in-out]",
    twIcon: "bx bxs-ghost group-hover:text-icon-pink",
    twIconActive: "text-icon-pink",
  },
  {
    label: "Experiencia",
    fadeIn: "animate-[fadeIn_2s_ease-in-out]",
    twIcon: "bx bxs-star group-hover:text-icon-yellow",
    twIconActive: "text-icon-yellow",
  },
  {
    label: "Educación",
    fadeIn: "animate-[fadeIn_2.5s_ease-in-out]",
    twIcon: "bx bxs-book group-hover:text-icon-sky",
    twIconActive: "text-icon-sky",
  },
];

const ActiveTabBackground = ({ position }) => {
  const MotionLi = motion.li;
  return (
    <MotionLi
      animate={{
        ...position,
      }}
      className="absolute z-0 min-h-8 rounded-full bg-white/15"
    />
  );
};

export default function NavBar() {
  const [activeNavTab, setActiveNavTab] = useState("Home");
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <header className="sticky top-0 z-50 flex flex-row justify-center bg-transparent">
      <nav className="min-w-full animate-fade-down-nav rounded-3xl bg-black/10 py-1 backdrop-blur-sm sm:min-w-1/3">
        <ul className="relative flex flex-row">
          {NAV_TABS.length > 0 &&
            NAV_TABS.map((item) => (
              <NavItem
                key={item.label}
                isSelected={item.label == activeNavTab}
                label={item.label}
                setSelected={setActiveNavTab}
                setPosition={setPosition}
                twFadeIn={item.fadeIn}
                twIcon={`${item.twIcon} ${activeNavTab === item.label ? item.twIconActive + " animate-pulse-icon" : ""}`}
              />
            ))}
          <ActiveTabBackground position={position} />
        </ul>
      </nav>
    </header>
  );
}
