import "boxicons/css/boxicons.min.css";

export default function NavItem({
  iconClass,
  label,
  onActiveLabel,
  activeColor,
  onHoverIconCSS,
  onFadeADownCSS,
  onActiveLabelBg,
}) {
  return (
    <li
      onClick={() => onActiveLabel(label)}
      className={`group cursor-pointer rounded-3xl px-4 py-1 hover:backdrop-blur-md hover:bg-white/8 transition duration-300 ${onActiveLabelBg} ${onFadeADownCSS}`}
    >
      <a className={`flex flex-row place-items-center gap-x-1 min-h-8 `}>
        <i className={`${iconClass} ${activeColor} ${onHoverIconCSS}`}></i>
        <p>{label}</p>
      </a>
    </li>
  );
}
