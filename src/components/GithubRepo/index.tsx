import { motion } from "framer-motion";
import { IRepo } from "Pages/Home/Sections/Projects/data";
import React from "react";
import ForkIcon from "./git-merge.svg";
import styles from "./repoCard.module.css";
import StarIcon from "./star.svg";

const RepoCard: React.FC<IRepo> = ({
  repo,
  description,
  stars,
  forks,
  link,
}) => {
  return (
    <motion.a
      className={styles.link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={{
        visible: {
          scale: 1,
        },
        hidden: {
          scale: 0,
        },
      }}
    >
      <div className={styles.container}>
        <h4>{repo}</h4>
        <p>{description}</p>
        <div className={styles.stats}>
          <p>
            {stars} <img src={StarIcon} alt="stars" className={styles.icon} />
          </p>
          <p>
            {forks} <img src={ForkIcon} alt="forks" className={styles.icon} />
          </p>
        </div>
      </div>
    </motion.a>
  );
};

export default RepoCard;
