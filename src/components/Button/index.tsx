import React from "react";
import styles from "./Button.module.css";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  onClick,
  ...args
}) => {
  return (
    <button
      className={[styles.button, className].join(" ")}
      onClick={onClick}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
