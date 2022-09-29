import styles from "./JoinUs.module.css";

const JoinUs = () => {
  return (
    <div className={styles.join_us_section}>
      <p className={styles.text}>می‌خواهید در این مسیر همراه ما باشید؟</p>
      <a href="">
      <button className={styles.btn}>به ما بپیوندید</button>
      </a>
    </div>
  );
};

export default JoinUs;
