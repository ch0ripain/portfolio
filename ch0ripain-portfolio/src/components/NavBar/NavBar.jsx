import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { motion } from "motion/react";

const NAV_TABS = [
  {
    label: "home",
    twIcon: "bx bxs-hot -alt-2 group-hover:text-icon-orange",
    twIconActive: "text-icon-orange",
  },
  {
    label: "skills",
    twIcon: "bx bxs-ghost group-hover:text-icon-pink",
    twIconActive: "text-icon-pink",
  },
  {
    label: "experiencia",
    twIcon: "bx bxs-star group-hover:text-icon-yellow",
    twIconActive: "text-icon-yellow",
  },
  {
    label: "educacion",
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
  const [activeNavTab, setActiveNavTab] = useState(null);
  const [showNav, setShowNav] = useState("invisible");
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const defaultUrl = window.location.href;
    const timeout = setTimeout(() => {
      setShowNav("visible");
    }, 5500);
    return () => {
      clearTimeout(timeout);
      if (
        defaultUrl.includes("skills") ||
        defaultUrl.includes("experiencia") ||
        defaultUrl.includes("educacion")
      ) {
        window.location.replace("/");
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 flex flex-row justify-center bg-transparent">
      <nav
        className={`min-w-full ${showNav} animate-fade-in rounded-3xl bg-white/5 py-1 backdrop-blur-sm animate-delay-[5.5s] animate-duration-[0.5s] sm:min-w-1/3`}
      >
        <ul className="relative flex flex-row">
          {NAV_TABS.length > 0 &&
            NAV_TABS.map((item) => (
              <NavItem
                key={item.label}
                isSelected={item.label === activeNavTab}
                label={item.label}
                setSelected={setActiveNavTab}
                setPosition={setPosition}
                twIcon={`${item.twIcon} ${activeNavTab === item.label ? item.twIconActive + " animate-[jelly_1s_ease] animate-delay-[0.3s]" : ""}`}
              />
            ))}
          <ActiveTabBackground position={position} />
        </ul>
      </nav>
    </header>
  );
}
