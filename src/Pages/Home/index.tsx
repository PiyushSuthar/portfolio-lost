import Hero from "components/Hero";
import React from "react";
import AboutSection from "./Sections/About";
import ProjectsSection from "./Sections/Projects";

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
    </div>
  );
};

export default Home;
