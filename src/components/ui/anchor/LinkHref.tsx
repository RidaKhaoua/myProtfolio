import React from "react";

interface TProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  className?: string;
  icon?: string | React.ReactNode;
  href: string;
  target?: "_self" | "_blank";
  iconAniamte?: "animate-bounce";
  children?: React.ReactNode
}

function LinkHref({
  label,
  className,
  icon,
  href,
  iconAniamte,
  target = "_self",
  children
}: TProps) {
  return (
    <a className={className} href={href} target={target}>
      {label}

      {icon && (
        <span
          className={`material-symbols-rounded ${iconAniamte}`}
          aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </a>
  );
}

export default LinkHref;
