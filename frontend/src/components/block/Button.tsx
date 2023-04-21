import React, { FC } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  variant?: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({
  type = "button",
  text,
  variant = "primary",
}) => {
  let classes = `button button--${variant}`;

  return (
    <button className={classes} type={type}>
      {text}
    </button>
  );
};
