import projects from "../../../data_information/projects";

import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
  const rtlMode = (project) => {
    return (
      <div className={styles.project} key={project.id}>
        <div>
          <p className={styles.rtl_header_title}>طراحی سایت</p>
          <p className={styles.rtl_proj_title}>{project.title}</p>
          <p className={styles.rtl_proj_text}>{project.text}</p>
          <button className={styles.rtl_more_info_btn} type="button">
            جزئیات بیشتر
          </button>
        </div>
        <img src={project.pic}></img>
      </div>
    );
  };

  const ltrMode = (project) => {
    return (
      <div className={styles.project} key={project.id}>
        <img src={project.pic}></img>
        <div>
          <p className={styles.ltr_header_title}>طراحی سایت</p>
          <p className={styles.ltr_proj_title}>{project.title}</p>
          <p className={styles.ltr_proj_text}>{project.text}</p>
          <button className={styles.ltr_more_info_btn} type="button">
            جزئیات بیشتر
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.projects_section}>
      <p className={styles.proj_page_title}>پروژه های ما</p>
      <div>
        {projects.map((project, index) => {
          if (index % 2 === 0) {
            return rtlMode(project);
          }
          return ltrMode(project);
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
