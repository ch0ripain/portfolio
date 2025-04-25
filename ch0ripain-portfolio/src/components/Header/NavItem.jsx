import "boxicons/css/boxicons.min.css";

export default function NavItem({
  iconClass,
  label,
  onActiveLabel,
  activeColor,
  onHoverIconCSS,
  onFadeADownCSS,
}) {
  return (
    <li onClick={() => onActiveLabel(label)} className="group">
      <a
        className={`flex flex-row cursor-pointer p-2 rounded-3xl place-items-center gap-x-1 min-h-8 ${onFadeADownCSS}`}
      >
        <i className={`${iconClass} ${activeColor} ${onHoverIconCSS}`}></i>
        <p>{label}</p>
      </a>
    </li>
  );
}
