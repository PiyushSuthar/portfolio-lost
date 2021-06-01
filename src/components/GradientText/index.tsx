import React from "react";
import styles from "./GradientText.module.css";

interface Props {
  type: `h${1 | 2 | 3 | 4 | 5 | 6}` | "p" | "span";
}

const GradientText: React.FC<Props & React.HTMLProps<HTMLParagraphElement>> = ({
  type = "h1",
  children,
  className,
  ...args
}) => {
  return React.createElement(
    type,
    {
      className: [className, styles.gradient_text].join(" "),
      ...args,
    },
    children
  );
};

export default GradientText;
