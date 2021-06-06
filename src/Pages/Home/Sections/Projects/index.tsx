import Button from "components/Button";
import RepoCard from "components/GithubRepo";
import TiltedContainer from "components/TiltedContainer";
import React, { useEffect, useState } from "react";
import { getRepos, IRepo } from "./data";
import styles from "./Projects.module.css";

const ProjectsSection = () => {
  const [repos, setRepos] = useState<IRepo[]>([]);

  useEffect(() => {
    getRepos().then((data) => {
      setRepos(data);
    });
  }, []);

  return (
    <div>
      <TiltedContainer
        heading="Projects"
        subheading="I Build Random Stuff!"
        row
      >
        <div className={styles.container}>
          <div
            className={styles.slider_container}
          >
            {repos.map((repo) => (
              <RepoCard key={repo.repo} {...repo} />
            ))}
          </div>
          <a
            href="https://github.com/piyushsuthar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Show More!</Button>
          </a>
        </div>
      </TiltedContainer>
    </div>
  );
};

export default ProjectsSection;
