import "boxicons";
import { useRef } from "react";

export default function NavItem({
  twIcon,
  twFadeIn,
  isSelected,
  label,
  setSelected,
  setPosition,
}) {
  const activeTabRef = useRef(null);
  return (
    <li
      onClick={() => setSelected(label)}
      className={`group mx-1 flex flex-1 flex-row place-content-center ${twFadeIn}`}
    >
      <a
        ref={activeTabRef}
        onClick={() => {
          if (!activeTabRef?.current) return;
          const { width } = activeTabRef.current.getBoundingClientRect();
          setPosition({
            left: activeTabRef.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        href={`#${label.toLowerCase()}`}
        className={`relative flex min-h-8 cursor-pointer flex-row place-items-center justify-center sm:flex-1 ${isSelected ? "space-x-1" : "sm:space-x-1"} rounded-3xl px-4 py-1`}
      >
        <i className={`${twIcon}`}></i>
        {isSelected ? (
          <p>{label}</p>
        ) : (
          <p className="hidden sm:block">{label}</p>
        )}
      </a>
    </li>
  );
}
