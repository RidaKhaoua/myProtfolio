import { HTMLAttributes } from "react";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text?: string;
  className: string;
}

function Button({ children, text, className, ...rest }: IButton) {
  return (
    <button className={className} {...rest}>
      {text}
      {children}
    </button>
  );
}

export default Button;
