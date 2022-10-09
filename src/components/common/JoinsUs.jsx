import { useSelector } from "react-redux";

import scrollHandler from "./scrollHandler";

import styles from "./JoinUs.module.css";

const JoinUs = () => {
  const mobileView = useSelector((state) => state.mobile.mobileView);
  return (
    <div className={styles.join_us_section}>
      {mobileView ? (
        <p className={styles.text_mobile}>
          می‌خواهید در این مسیر <br />
          همراه ما باشید؟
        </p>
      ) : (
        <p className={styles.text}>می‌خواهید در این مسیر همراه ما باشید؟</p>
      )}
      <button
        className={styles.btn + ` ${mobileView ? styles.btn_mobile : null}`}
        onClick={() => {
          scrollHandler("top");
        }}
      >
        به ما بپیوندید
      </button>
    </div>
  );
};

export default JoinUs;
