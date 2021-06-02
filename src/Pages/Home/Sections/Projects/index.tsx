import RepoCard from "components/GithubRepo";
import TiltedContainer from "components/TiltedContainer";
import React from "react";

const ProjectsSection = () => {
  return (
    <div>
      <TiltedContainer
        heading="Projects"
        subheading="I Build Random Stuff!"
        row
      >
        <RepoCard />
      </TiltedContainer>
    </div>
  );
};

export default ProjectsSection;
