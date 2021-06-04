import { Node } from "Pages/Home/Sections/Anime/data";
import React from "react";
import styles from "./AnimeCard.module.css";

const AnimeCard: React.FC<Node> = ({
  idMal,
  title,
  coverImage,
  id,
  genres,
}) => {
  return (
    <a
      className={styles.link_container}
      href={`https://anilist.co/anime/${id || idMal}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            className={styles.coverImage}
            src={coverImage.large}
            alt={title.english || title.userPreferred || title.native}
          />
        </div>
        <div className={styles.card_text}>
          <p>{title.english || title.userPreferred || title.native}</p>
          {/* <div className={styles.genres}>
            {genres.map((genre) => (
              <div className={styles.genre}>{genre}</div>
            ))}
          </div> */}
        </div>
      </div>
    </a>
  );
};

export default AnimeCard;
