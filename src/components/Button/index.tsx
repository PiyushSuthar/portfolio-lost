import { motion } from "framer-motion";
import React from "react";
import styles from "./Button.module.css";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <motion.button
      className={[styles.button, className].join(" ")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
