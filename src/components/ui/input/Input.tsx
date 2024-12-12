import React, { HtmlHTMLAttributes } from "react";

interface INput extends HtmlHTMLAttributes<HTMLInputElement> {
  className?: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  autoComplete: string;
  placeholder?: string;
}

function Input({
  className,
  type,
  name,
  autoComplete,
  placeholder,
  ...rest
}: INput) {
  return (
    <input
      className={className}
      type={type}
      name={name}
      autoComplete={autoComplete}
      required
      placeholder={placeholder}
      {...rest}
    />
  );
}

export default Input;
