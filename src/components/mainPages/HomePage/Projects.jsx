import { useState, useEffect } from "react";
import projects from "../../../data_information/projects";

import styles from "./Projects.module.css";
import Project from "./common/Project";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let temp = 0;
  let imageInterval;
  // useEffect(() => {
  //   imageInterval = setInterval(() => {
  //     setActiveIndex((prevState) => {
  //       console.log("prev: ", prevState);
  //       console.log("next: ", (prevState + 1) % projects.length);
  //       return (prevState + 1) % projects.length;
  //     });
  //   }, 5000);
  // }, []);

  // useEffect(() => {
  //   clearInterval(imageInterval);
  //   setTimeout(() => {
  //     imageInterval = setInterval(() => {
  //       setActiveIndex((prevState) => {
  //         console.log("prev: ", prevState);
  //         console.log("next: ", (prevState + 1) % projects.length);
  //         return (prevState + 1) % projects.length;
  //       });
  //     }, 5000);
  //   }, 5000);
  // }, [activeIndex]);
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
