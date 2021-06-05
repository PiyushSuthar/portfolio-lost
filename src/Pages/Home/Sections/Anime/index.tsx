import AnimeCard from "components/AnimeCard";
import Button from "components/Button";
import GradientText from "components/GradientText";
import TiltedContainer from "components/TiltedContainer";
import { motion, useCycle } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./Anime.module.css";
import { getAnimeData, IAnimeData } from "./data";

const AnimeSection = () => {
  const [animeData, setAnimeData] = useState<IAnimeData | null>(null);
  const [showAll, setShowAll] = useCycle(false, true);

  useEffect(() => {
    getAnimeData().then((data) => {
      setAnimeData(data);
    });
  }, []);

  if (!animeData) {
    return <GradientText type="h3">Loading</GradientText>;
  }

  const Stats = () => (
    <div className={styles.anime_stats}>
      <div className={styles.stat}>
        <GradientText type="span">
          {animeData.data.User.statistics.anime.count}
        </GradientText>{" "}
        Animes Watched
      </div>
      <div className={styles.stat}>
        <GradientText type="span">
          {animeData.data.User.statistics.anime.episodesWatched}
        </GradientText>{" "}
        Episodes Watched
      </div>
    </div>
  );

  const MotionAnimeCard = motion(AnimeCard);

  const card = {
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const Favourites = () => (
    <div className={styles.fav_animes_container}>
      <h4
        style={{
          fontWeight: 500,
          fontSize: "24px",
          marginBottom: "10px",
        }}
      >
        Favourites
      </h4>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={card}
        className={styles.fav_animes}
      >
        {animeData.data.User.favourites.anime.nodes
          .slice(
            0,
            showAll ? animeData.data.User.favourites.anime.nodes.length : 4
          )
          .map((anime) => (
            <MotionAnimeCard key={anime.idMal} {...anime} />
          ))}
      </motion.div>
      <div className={styles.button_container}>
        <Button
          onClick={() => {
            setShowAll();
          }}
        >
          Show {showAll ? "less" : "More"}
        </Button>
      </div>
    </div>
  );

  return (
    <div style={{ width: "100%" }}>
      <TiltedContainer heading="Anime" subheading="Jr. Weeb!">
        <Stats />
        <Favourites />
      </TiltedContainer>
    </div>
  );
};

export default AnimeSection;
