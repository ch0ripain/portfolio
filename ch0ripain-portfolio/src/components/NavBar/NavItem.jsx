import "boxicons";

export default function NavItem({
  twIcon,
  twFadeIn,
  isSelected,
  label,
  setSelected,
}) {
  return (
    <li
      onClick={() => setSelected(label)}
      className={`group mx-1 flex flex-1 flex-row place-content-center ${twFadeIn}`}
    >
      <a
        href={`#${label.toLowerCase()}`}
        className={`flex min-h-8 cursor-pointer flex-row place-items-center justify-center hover:bg-white/10 sm:flex-1 ${isSelected ? "space-x-1 bg-white/15" : "sm:space-x-1"} rounded-3xl px-4 py-1`}
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
