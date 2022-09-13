import styles from "./Project.module.css";

const Project = ({ index, active, title, onChangeIndex }) => {
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
        <div className={styles.square}></div>
        <div className={styles["title-parent"]}>
          <div></div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
      <div className={styles.project__left}>
        <div className={styles.details}></div>
      </div>
    </div>
  );
};

export default Project;
