import { useState } from "react";
import NavItem from "./NavItem";

export default function Header() {
  const [activeNavItemLabel, setActiveNavItemLabel] = useState("Inicio");

  function handleActiveNavItem(label) {
    setActiveNavItemLabel(label);
  }

  return (
    <header className="flex flex-row justify-center bg-transparent">
      <nav className="w-1/3 rounded-3xl backdrop-blur-sm bg-black/15 animate-[fadeDownWithBorder_5s_ease-in-out]">
        <ul className="flex flex-row justify-evenly">
          <NavItem
            label="Inicio"
            iconClass="bx bxs-flame"
            onActiveLabel={handleActiveNavItem}
            activeColor={
              activeNavItemLabel === "Inicio" && "text-orange-500 animate-pulse"
            }
            onHoverIconCSS="group-hover:text-orange-500"
            onFadeADownCSS="animate-[fadeDownIcon_1.5s_ease-in-out]"
          />
          <NavItem
            label="Skills"
            iconClass="bx bxs-ghost"
            onActiveLabel={handleActiveNavItem}
            activeColor={
              activeNavItemLabel === "Skills" && "text-pink-500 animate-pulse"
            }
            onHoverIconCSS="group-hover:text-pink-500"
            onFadeADownCSS="animate-[fadeDownIcon_2s_ease-in-out]"
          />
          <NavItem
            label="Experiencia"
            iconClass="bx bxs-star"
            onActiveLabel={handleActiveNavItem}
            activeColor={
              activeNavItemLabel === "Experiencia" &&
              "text-yellow-400 animate-pulse"
            }
            onHoverIconCSS="group-hover:text-yellow-400"
            onFadeADownCSS="animate-[fadeDownIcon_2.5s_ease-in-out]"
          />
          <NavItem
            label="Educación"
            iconClass="bx bxs-book-bookmark"
            onActiveLabel={handleActiveNavItem}
            activeColor={
              activeNavItemLabel === "Educación" && "text-sky-600 animate-pulse"
            }
            onHoverIconCSS="group-hover:text-sky-600"
            onFadeADownCSS="animate-[fadeDownIcon_3s_ease-in-out]"
          />
        </ul>
      </nav>
    </header>
  );
}
