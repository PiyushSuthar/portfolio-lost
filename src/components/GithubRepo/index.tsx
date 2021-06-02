import React from "react";
import ForkIcon from "./git-merge.svg";
import styles from "./repoCard.module.css";
import StarIcon from "./star.svg";

const RepoCard = () => {
  return (
    <a
      className={styles.link}
      href="https://github.com/PiyushSuthar/cowin-api-client"
    >
      <div className={styles.container}>
        <h4>Cowin-APi-Client</h4>
        <p>
          API wrapper for Co-Win API from API SETU with Type Declarations 🔥.
        </p>
        <div className={styles.stats}>
          <p>
            5 <img src={StarIcon} alt="stars" className={styles.icon} />
          </p>
          <p>
            1 <img src={ForkIcon} alt="forks" className={styles.icon} />
          </p>
        </div>
      </div>
    </a>
  );
};

export default RepoCard;
