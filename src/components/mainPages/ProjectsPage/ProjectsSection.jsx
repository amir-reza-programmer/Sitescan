import projects from "../../../data_information/projects";
import { useSelector } from "react-redux";
import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
  const mobileView = useSelector((state) => state.mobile.mobileView);
  const rtlMode = (project) => {
    return (
      <div className={styles.project} key={project.id}>
        <div>
          <p className={styles.rtl_header_title}>طراحی سایت</p>
          <p className={styles.rtl_proj_title}>{project.title}</p>
          <p className={styles.rtl_proj_text}>{project.text}</p>
          <button className={styles.rtl_more_info_btn} type="button">
            مشاهده وبسایت
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
            مشاهده وبسایت
          </button>
        </div>
      </div>
    );
  };

  const mobileViewMode = (project) => {
    return (
      <div className={styles.proj_mobile} key={project.id}>
        <div className={styles.proj_descriptions_mobile}>
          <p className={styles.header_title_mobile}>طراحی سایت</p>
          <p className={styles.proj_title_mobile}>{project.title}</p>
          <p className={styles.proj_text_mobile}>{project.text}</p>
        </div>
        <img
          className={styles.proj_pic_mobile}
          src={project.pic}
          alt="project_pic"
        ></img>
        <button onClick={()=>{window.location.reload()}} className={styles.more_info_btn_mobile} type="button">
          مشاهده وبسایت
        </button>
      </div>
    );
  };

  return (
    <div
      className={
        mobileView ? styles.projects_section_mobile : styles.projects_section
      }
    >
      <p
        className={
          mobileView ? styles.proj_page_title_mobile : styles.proj_page_title
        }
      >
        پروژه های ما
      </p>
      <div>
        {projects.map((project, index) => {
          if (mobileView) {
            return mobileViewMode(project);
          }
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
