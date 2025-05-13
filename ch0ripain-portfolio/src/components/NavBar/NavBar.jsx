import { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { motion } from "motion/react";
import GsapMagnetic from "../Animations/GsapMagnetic";

const NAV_TABS = [
  {
    name: "home",
  },
  {
    name: "skills",
  },
  {
    name: "experiencia",
  },
  {
    name: "educacion",
  },
];

const ActiveTabBackground = ({ position }) => {
  const MotionLi = motion.li;
  return (
    <GsapMagnetic>
      <MotionLi
        animate={{
          ...position,
        }}
        className="absolute z-0 min-h-8 rounded-full sm:bg-white/15"
      />
    </GsapMagnetic>
  );
};

export default function Navbar() {
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
        className={`min-w-full ${showNav} animate-fade-in rounded-3xl py-1 backdrop-blur-sm animate-delay-[5.5s] animate-duration-[0.5s] sm:min-w-1/3`}
      >
        <ul className="relative flex flex-row">
          {NAV_TABS.length > 0 &&
            NAV_TABS.map((item) => (
              <NavbarItem
                key={item.name}
                isSelected={item.name === activeNavTab}
                name={item.name}
                setSelected={setActiveNavTab}
                setPosition={setPosition}
              />
            ))}
          <ActiveTabBackground position={position} />
        </ul>
      </nav>
    </header>
  );
}
