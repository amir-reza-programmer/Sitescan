import styles from "./Form.module.css";
import { useState } from "react";

const Form = ({ title }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredQuestion, setEnteredQuestion] = useState("");

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const questionHandler = (event) => {
    setEnteredQuestion(event.target.value);
  };
  const formHandler = () => {
    if (enteredName.trim().length >= 3 && enteredQuestion.trim().length >= 5) {
      window.location.reload();
      console.log("reloaded");
    }
  };
  return (
    <div className={styles["form-parent"]}>
      <h2 className={styles.title}>{title}</h2>
      <form onSubmit={formHandler} action="">
        <input
          value={enteredName}
          onChange={nameHandler}
          type="text"
          placeholder="نام و نام خانوادگی"
        />
        <input
          value={enteredEmail}
          onChange={emailHandler}
          type="email"
          placeholder="آدرس ایمیل"
        />
        <textarea
          name="Text1"
          value={enteredQuestion}
          onChange={questionHandler}
          cols="40"
          rows="5"
          placeholder="متن سوال"
        ></textarea>
        <input type="submit" value="ارسال" />
      </form>
    </div>
  );
};

export default Form;
