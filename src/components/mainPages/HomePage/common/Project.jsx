import styles from "./Project.module.css";

const Project = ({ index, active, title, icon, onChangeIndex }) => {
  const backgroundStyle = {
    backgroundColor: `#${active ? "004373" : "002A48"}`,
  };

  return (
    <div
      onClick={() => {
        onChangeIndex(index);
      }}
      style={backgroundStyle}
      className={styles.project}
    >
      <div className={styles.project__right}>
      <img className={styles.icon} src={icon} alt="" />
        <div className={styles["title-parent"]}>
          <div>طراحی سایت</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
      <div className={styles.project__left}>
        <div className={styles.details}>مشاهده وبسایت</div>
      </div>
    </div>
  );
};

export default Project;
