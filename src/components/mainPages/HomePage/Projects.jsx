import { useState, useEffect } from "react";
import projects from "../../../data_information/projects";

import styles from "./Projects.module.css";
import Project from "./common/Project";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setActiveIndex((prevState) => {
        return (prevState + 1) % projects.length;
      });
    }, 5000);
    return () => clearInterval(imageInterval);
  }, [activeIndex]);

  const changIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.projects}>
      <div className={styles.projects__top}>
        <h2>پروژه‌های ما</h2>
      </div>
      <div className={styles.projects__bottom}>
        <div className={styles.items}>
          {projects.map((project, index) => (
            <Project
              key={project.id}
              index={index}
              active={activeIndex === index}
              title={project.title}
              onChangeIndex={changIndex}
            />
          ))}
        </div>
        <div className={styles.brochure}>
          <img
            src={projects[activeIndex].pic}
            alt={projects[activeIndex].title}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
