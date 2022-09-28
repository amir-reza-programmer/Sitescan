import styles from "./DevSteps.module.css";

const DevSteps = () => {
  return (
    <div className={styles["dev-steps"]}>
      <div className={styles.top}>
        <div className={styles.step}>
          <div className={styles.step__title}>طراحی رابط کاربری</div>
          <p className={styles.step__description}>
            پس از تایید شما، طراحان ما بر اساس پروتوتایپ، جزئیات وبسایت شما را
            طراحی می‌کنند.
          </p>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.circle}>1</div>
        <div className={styles.line}></div>
        <div className={styles.circle}>2</div>
        <div className={styles.line}></div>
        <div className={styles.circle}>3</div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.step}>
          <div className={styles.step__title}>طراحی پروتوتایپ</div>
          <p className={styles.step__description}>
            با توجه به نیازهای شما، نقشه کلی از ساختار و چیدمان صفحات طراحی
            خواهد شد.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.step__title}>پیاده‌سازی</div>
          <p className={styles.step__description}>
            برنامه نویسان ما طرح گرافیکی مورد تایید شما را به یک وبسایت واقعی
            تبدیل می‌کنند.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevSteps;
