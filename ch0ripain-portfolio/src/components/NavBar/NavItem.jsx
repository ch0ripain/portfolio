import "boxicons";
import { useRef, useEffect } from "react";

export default function NavItem({
  twIcon,
  isSelected,
  label,
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

  return (
    <li className={`group mx-1 flex flex-1 flex-row place-content-center`}>
      <a
        id={`${label}Link`}
        ref={activeTabRef}
        href={"#" + label}
        className={`relative flex min-h-8 cursor-pointer flex-row place-items-center justify-center sm:flex-1 ${isSelected ? "space-x-1" : "sm:space-x-1"} rounded-3xl px-4 py-1`}
      >
        <i className={`${twIcon}`}></i>
        {isSelected ? (
          <p>{label.charAt(0).toUpperCase() + label.slice(1)}</p>
        ) : (
          <p className="hidden sm:block">
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </p>
        )}
      </a>
    </li>
  );
}
