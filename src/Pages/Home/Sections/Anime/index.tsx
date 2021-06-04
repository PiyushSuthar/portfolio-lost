import AnimeCard from "components/AnimeCard";
import Button from "components/Button";
import GradientText from "components/GradientText";
import TiltedContainer from "components/TiltedContainer";
import React, { useEffect, useState } from "react";
import styles from "./Anime.module.css";
import { getAnimeData, IAnimeData } from "./data";

const AnimeSection = () => {
  const [animeData, setAnimeData] = useState<IAnimeData | null>(null);
  const [showAll, setShowAll] = useState(false);

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
      <div className={styles.fav_animes}>
        {animeData.data.User.favourites.anime.nodes
          .slice(
            0,
            showAll ? animeData.data.User.favourites.anime.nodes.length : 4
          )
          .map((anime) => (
            <AnimeCard key={anime.idMal} {...anime} />
          ))}
      </div>
      <div className={styles.button_container}>
        <Button
          onClick={() => {
            setShowAll((prev) => !prev);
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
