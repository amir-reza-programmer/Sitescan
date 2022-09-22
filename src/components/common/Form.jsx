import { Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";

import useInput from "../hooks/use-input";

import "react-toastify/dist/ReactToastify.css";
import toastStyle from "./Toastify.module.css";
import styles from "./Form.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

const Form = ({ title }) => {
  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    valueChangeHandler: fullNameChangeHandler,
    reset: resetFullName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: textValue,
    isValid: textIsValid,
    valueChangeHandler: textChangeHandler,
    reset: resetText,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (fullNameIsValid && emailIsValid && textIsValid) {
    formIsValid = true;
  }

  const formHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFullName();
    resetEmail();
    resetText();
  };

  const handleClick = () => {
    if (!fullNameIsValid) {
      toast.error("لطفا نام و نام خانوادگی خود را وارد کنید", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        className: toastStyle.toastify_message,
      });
    } else if (!isNotEmpty(emailValue)) {
      toast.error("لطفا ایمیل خود را وارد کنید", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        className: toastStyle.toastify_message,
      });
    } else if (!emailIsValid) {
      toast.error("لطفا ایمیل خود را به درستی وارد کنید", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        className: toastStyle.toastify_message,
      });
    } else if (!textIsValid) {
      toast.error("لطفا متن خود را وارد کنید", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        className: toastStyle.toastify_message,
      });
    } else {
      toast.success("پیام شما با موفقیت ارسال شد", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        className: toastStyle.toastify_message,
      });
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className={styles["form-parent"]}>
        <h2 className={styles.title}>{title}</h2>
        <form onSubmit={formHandler}>
          <input
            type="text"
            value={fullNameValue}
            onChange={fullNameChangeHandler}
            placeholder="نام و نام خانوادگی"
          />
          <input
            type="email"
            value={emailValue}
            onChange={emailChangeHandler}
            placeholder="آدرس ایمیل"
          />
          <textarea
            value={textValue}
            onChange={textChangeHandler}
            placeholder="متن سوال"
          ></textarea>
          <button
            className={styles.send_btn}
            type="submit"
            onClick={handleClick}
          >
            ارسال
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
