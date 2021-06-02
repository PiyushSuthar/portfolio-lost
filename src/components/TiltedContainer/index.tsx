import GradientText from "components/GradientText";
import React from "react";
import styles from "./TiltedContainer.module.css";

interface Props {
  heading: string;
  subheading: string;
  row?: boolean;
}

const TiltedContainer: React.FC<Props> = ({
  children,
  heading,
  subheading,
  row,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div
          className={styles.heading}
          style={
            {
              "--direction": row ? "row" : "column",
            } as any
          }
        >
          <GradientText type="h3" className={styles.heading_h3}>
            {heading}
          </GradientText>
          <p>{subheading}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default TiltedContainer;
