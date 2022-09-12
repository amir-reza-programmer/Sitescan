import projects from "../../../data_information/projects";

import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
  const rtlMode = <div></div>;

  const ltrMode = <div></div>;

  let isEven = 0;
  return (
    <div>
      <p>پروژه های ما</p>
      <div>
        {projects.map((project, index) => {
          {
            isEven = index % 2 === 0;
          }
          {
            isEven && (
              <div className={styles.project} key={index}>
                <div className={styles.proj_description}>
                  <p className={styles.header_title}>طراحی سایت</p>
                  <p className={styles.proj_title}>{project.title}</p>
                  <p className={styles.proj_text}>{project.text}</p>
                  <button className={styles.more_info_btn} type="button">
                    جزئیات بیشتر
                  </button>
                </div>
                <img className={styles.pic} src={project.pic}></img>
              </div>
            );
          }
          {
            !isEven && <div key={index}></div>;
          }
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
