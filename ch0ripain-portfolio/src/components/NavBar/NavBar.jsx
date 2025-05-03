import { useState } from "react";
import NavItem from "./NavItem";
import { motion } from "motion/react";

const NAV_TABS = [
  {
    label: "Home",
    twIcon: "bx bxs-hot -alt-2 group-hover:text-icon-orange",
    twIconActive: "text-icon-orange",
  },
  {
    label: "Skills",
    twIcon: "bx bxs-ghost group-hover:text-icon-pink",
    twIconActive: "text-icon-pink",
  },
  {
    label: "Experiencia",
    twIcon: "bx bxs-star group-hover:text-icon-yellow",
    twIconActive: "text-icon-yellow",
  },
  {
    label: "Educación",
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
      className="absolute z-0 min-h-8 rounded-full sm:bg-white/15"
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
      <nav className="min-w-full animate-fade-in-down rounded-3xl bg-white/5 py-1 backdrop-blur-sm animate-delay-[3.1s] animate-duration-[0.6s] sm:min-w-1/3">
        <ul className="relative flex flex-row">
          {NAV_TABS.length > 0 &&
            NAV_TABS.map((item) => (
              <NavItem
                key={item.label}
                isSelected={item.label == activeNavTab}
                label={item.label}
                setSelected={setActiveNavTab}
                setPosition={setPosition}
                twIcon={`${item.twIcon} ${activeNavTab === item.label ? item.twIconActive + " animate-pulsing" : ""}`}
              />
            ))}
          <ActiveTabBackground position={position} />
        </ul>
      </nav>
    </header>
  );
}
