interface TProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  classname?: string;
  icon?: string;
  href: string;
  target?: "_self" | "_blank";
  iconAniamte?: "animate-bounce";
}

function LinkHref({
  label,
  classname,
  icon,
  href,
  iconAniamte,
  target = "_self",
}: TProps) {
  return (
    <a className={classname} href={href} target={target}>
      {label}
      {icon && (
        <span
          className={`material-symbols-rounded ${iconAniamte}`}
          aria-hidden="true">
          {icon}
        </span>
      )}
    </a>
  );
}

export default LinkHref;
