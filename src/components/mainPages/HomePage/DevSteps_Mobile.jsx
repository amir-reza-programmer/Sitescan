import styles from "./DevSteps_Mobile.module.css";

const DevSteps_Mobile = () => {
  return (
    <div className={styles.dev_steps}>
      <div className={styles.number_line}>
        <div className={styles.circle}>1</div>
        <div className={styles.line}></div>
        <div className={styles.circle}>2</div>
        <div className={styles.line}></div>
        <div className={styles.circle}>3</div>
      </div>
      <div className={styles.steps_section}>
        <div className={styles.step}>
          <div className={styles.step_title}>طراحی پروتوتایپ</div>
          <p className={styles.step_description}>
            با توجه به نیازهای شما، نقشه کلی از ساختار و چیدمان صفحات طراحی
            خواهد شد.
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.step_title}>طراحی رابط کاربری</div>
          <p className={styles.step_description}>
            پس از تایید شما، طراحان ما بر اساس پروتوتایپ، جزئیات وبسایت شما را
            طراحی می‌کنند.
          </p>
        </div>

        <div className={styles.step}>
          <div className={styles.step_title}>پیاده‌سازی</div>
          <p className={styles.step_description}>
            برنامه نویسان ما طرح گرافیکی مورد تایید شما را به یک وبسایت واقعی
            تبدیل می‌کنند.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevSteps_Mobile;
