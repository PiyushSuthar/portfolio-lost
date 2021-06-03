import Button from "components/Button";
import GradientText from "components/GradientText";
import React from "react";
import styles from "./Statistics.module.css";

interface StatCardProps {
  count: number | string;
  text: string;
}
const StatCard: React.FC<StatCardProps> = ({ count, text }) => (
  <div className={styles.card_container}>
    <GradientText type="span" className={styles.card_numbers}>
      {count}
    </GradientText>
    <p className={styles.card_text}>{text}</p>
  </div>
);

const Statistics = () => {
  return (
    <div className={styles.container}>
      <GradientText type="h3" className={styles.title}>
        Statistics
      </GradientText>
      <p className={styles.sub_title}>GitHub</p>
      <div className={styles.stats}>
        <StatCard text="Commits" count={550} />
        <StatCard text="Stars" count={120} />
        <StatCard text="Pull Requests" count={26} />
      </div>
      <a
        href="http://github.com/piyushsuthar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Check More On Github</Button>
      </a>
    </div>
  );
};

export default Statistics;
