import projects from "../../../data_information/projects";

import styles from "./Projects_Mobile.module.css";
import moreInfoButton from "../../../images/Projects/MoreInfoShape.svg";

const Projects_Mobile = () => {
  return (
    <section className={styles.projects_section}>
      <p className={styles.title}>پروژه های ما</p>
      <div className={styles.projects_part}>
        {projects.map((project) => {
          return (
            <div key={project.id} className={styles.project_element}>
              <img className={styles.img} src={project.pic}></img>
              <div>
                <img className={styles.more_info_btn} src={moreInfoButton}></img>
                <p className={styles.project_desc}>طراحی سایت</p>
                <p className={styles.project_title}>{project.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects_Mobile;
