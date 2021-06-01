import Button from "components/Button";
import GradientText from "components/GradientText";
import React from "react";
import Circle from "./Circles";
import styles from "./Hero.module.css";

interface Props {}

const Hero = (props: Props) => {
  const BIRTH_YEAR = 2004;

  return (
    <div className={styles.container}>
      <p style={{ fontSize: "24px", marginBottom: "10px" }}>नमस्ते 🙏</p>
      <GradientText type="h1" className={styles.name}>
        Piyush Suthar.
      </GradientText>
      <h3
        style={{ fontSize: "20px", fontWeight: "normal", marginBottom: "20px" }}
      >
        A {new Date().getFullYear() - BIRTH_YEAR} Y/O Nerd from India 🇮🇳 who
        wants to bring a change in the society.
      </h3>
      <Button>Resume</Button>
      <div className="circles">
        <Circle className={styles.circle1} />
        <Circle className={styles.circle2} />
        <Circle className={styles.circle3} />
        <Circle className={styles.circle4} />
      </div>
    </div>
  );
};

export default Hero;
