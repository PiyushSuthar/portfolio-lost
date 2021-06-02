import TitleBox from "components/TitleBox";
import nodejsIcon from "Icons/nodejs.svg";
import React from "react";
import styles from "./About.module.css";

const ProfleImage = () => (
  <div className={styles.image_container}>
    <div className={styles.image}>
      <img
        className={styles.image_img}
        src="https://avatars.githubusercontent.com/u/32237558?v=4"
        alt="Piyush Suthar"
      />
    </div>
    <div className="social_profiles"></div>
  </div>
);

type ILanguage = {
  name: string;
  link: string;
};
const LANGUAGES: ILanguage[] = [
  {
    link: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    name: "TypeScript",
  },
  {
    link: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    name: "Javascript",
  },
  {
    link: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    name: "css",
  },
  {
    link: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    name: "React",
  },
  {
    link: nodejsIcon,
    name: "node js",
  },
  {
    link: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    name: "GraphQl",
  },
];

const StuffIPlayWith = () => (
  <div className={styles.stuff_i_play_with}>
    {LANGUAGES.map((lang, index) => (
      <img key={lang.name} src={lang.link} alt={lang.name} />
    ))}
  </div>
);

const AboutMeText = () => (
  <div className={styles.about_me}>
    <p>
      Hi, I’m पियूष सुथार (Piyush Suthar 🍯 ), a self-taught web developer from
      India 🇮🇳. I love coding, playing flute and watching anime.
    </p>
    <br />
    <p>Stuff I play with (excluding my life):-</p>
    <StuffIPlayWith />
    <p>And all the basic web dev stuff....</p>
  </div>
);

const AboutSection = () => {
  return (
    <div>
      <TitleBox>About Me</TitleBox>
      <div className={styles.about_me_container}>
        <ProfleImage />
        <AboutMeText />
      </div>
    </div>
  );
};

export default AboutSection;
