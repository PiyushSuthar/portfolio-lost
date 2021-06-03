import GradientText from "components/GradientText";
import TiltedContainer from "components/TiltedContainer";
import React from "react";
import styles from "./Anime.module.css";

const AnimeSection = () => {
  return (
    <div style={{ width: "100%" }}>
      <TiltedContainer heading="Anime" subheading="Jr. Weeb!">
        <div className={styles.anime_stats}>
          <div className={styles.stat}>
            <GradientText type="span">23</GradientText> Animes Watched
          </div>
          <div className={styles.stat}>
            <GradientText type="span">320</GradientText> Episodes Watched
          </div>
        </div>
      </TiltedContainer>
    </div>
  );
};

export default AnimeSection;
