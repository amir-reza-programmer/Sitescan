import styles from "./Form.module.css";

const Form = ({ title }) => {
  return (
    <div className={styles["form-parent"]}>
      <h2 className={styles.title}>{title}</h2>
      <form action="">
        <input type="text" placeholder="نام و نام خانوادگی" />
        <input type="email" placeholder="آدرس ایمیل" />
        <textarea
          name="Text1"
          cols="40"
          rows="5"
          placeholder="متن سوال"
        ></textarea>
        <input type="button" value="ارسال" />
      </form>
    </div>
  );
};

export default Form;
