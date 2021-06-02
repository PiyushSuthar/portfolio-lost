import GradientText from "components/GradientText";
import React from "react";
import styles from "./TitleBox.module.css";

const TitleBox: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <GradientText type="h2" style={{ fontSize: "46px" }}>
        {children}
      </GradientText>
    </div>
  );
};

export default TitleBox;
