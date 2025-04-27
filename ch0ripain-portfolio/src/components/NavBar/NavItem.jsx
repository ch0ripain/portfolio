import "boxicons/css/boxicons.min.css";

export default function NavItem({
  twIcon,
  twFadeIn,
  isSelected,
  label,
  onActiveLabel,
}) {
  return (
    <li
      onClick={() => onActiveLabel(label)}
      className={`group mx-1 cursor-pointer flex-row place-content-center ${twFadeIn}`}
    >
      <a
        href={`#${label.toLowerCase()}`}
        className={`flex min-h-8 flex-1 flex-row place-items-center ${isSelected ? "space-x-1" : "sm:space-x-1"} rounded-3xl px-4 py-1 transition duration-300 hover:bg-white/8`}
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
