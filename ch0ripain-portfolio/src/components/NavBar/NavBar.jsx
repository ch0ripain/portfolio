import { useState } from "react";
import NavItem from "./NavItem";

const NAV_BORDER_STYLES = {
  Home: "1px solid rgba(249, 115, 22)",
  Skills: "1px solid rgba(236, 72, 153)",
  Trabajos: "1px solid rgba(250, 204, 21)",
  Educación: "1px solid rgba(2, 132, 199)",
};

const NAV_ITEMS = [
  {
    label: "Home",
    fadeIn: "animate-[fadeInNavItemOrange_3s_ease-in-out]",
    twIcon: "bx bxs-flame group-hover:text-icon-orange",
    twIconActive: "text-icon-orange animate-pulse",
  },
  {
    label: "Skills",
    fadeIn: "animate-[fadeInNavItemPink_5s_ease-in-out]",
    twIcon: "bx bxs-ghost group-hover:text-icon-pink",
    twIconActive: "text-icon-pink animate-pulse",
  },
  {
    label: "Trabajos",
    fadeIn: "animate-[fadeInNavItemYellow_6s_ease-in-out]",
    twIcon: "bx bxs-star group-hover:text-icon-yellow",
    twIconActive: "text-icon-yellow animate-pulse",
  },
  {
    label: "Educación",
    fadeIn: "animate-[fadeInNavItemSky_7s_ease-in-out]",
    twIcon: "bx bxs-book-bookmark group-hover:text-icon-sky",
    twIconActive: "text-icon-sky animate-pulse",
  },
];

export default function NavBar() {
  const [activeNavItemLabel, setActiveNavItemLabel] = useState("Home");

  function handleActiveNavItem(label) {
    setActiveNavItemLabel(label);
  }

  const navBorderStyleActive = NAV_BORDER_STYLES[activeNavItemLabel];

  return (
    <header className="sticky top-0 z-50 flex flex-row justify-center bg-transparent">
      <nav
        className="min-w-full animate-fade-down-nav rounded-3xl bg-white/5 py-1 backdrop-blur-sm sm:min-w-1/3"
        style={{ border: navBorderStyleActive }}
      >
        <ul className="flex flex-row justify-center">
          {NAV_ITEMS.length > 0 &&
            NAV_ITEMS.map((item) => (
              <NavItem
                key={item.label}
                isSelected={item.label === activeNavItemLabel}
                label={item.label}
                onActiveLabel={handleActiveNavItem}
                twFadeIn={item.fadeIn}
                twIcon={`${item.twIcon} ${activeNavItemLabel === item.label ? item.twIconActive : ""}`}
              />
            ))}
          <ul />
        </ul>
      </nav>
    </header>
  );
}
