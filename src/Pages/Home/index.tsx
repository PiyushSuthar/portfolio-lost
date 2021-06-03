import Hero from "components/Hero";
import React from "react";
import AboutSection from "./Sections/About";
import AnimeSection from "./Sections/Anime";
import ProjectsSection from "./Sections/Projects";
import Statistics from "./Sections/Statistics";

const Home: React.FC = () => {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Statistics />
      <AnimeSection />
    </div>
  );
};

export default Home;
