import { useState, useEffect } from "react";

import styles from "./FAQElement.module.css";
import visib from "../../../Common/firstVisibility.module.css";

const FAQElement = (props) => {
  const [seeAnswer, setSeeAsnwer] = useState(false);
  const seeAnswerHandler = () => {
    setSeeAsnwer((prevValue) => {
      return !prevValue;
    });
  };

  const [faqFirstVisibility, setFaqFirstVisibility] = useState(true);
  const faqFirstVisibilityIsGone = () => {
    setFaqFirstVisibility(false);
  };

  const faqStyle = [
    styles.faq,
    !faqFirstVisibility && !seeAnswer ? styles.decrease_height : "",
  ].join(" ");

  const answerText = [
    faqFirstVisibility ? visib.first_visibility : "",
    styles.answer_text,
    seeAnswer ? styles.show_answer : styles.hide_answer,
  ].join(" ");

  const element = document.getElementById(`faq_div${props.id}`);
  if (element) {
    const currentHeight = (element.offsetHeight / window.innerHeight) * 100;
    if (!seeAnswer) {
      document.documentElement.style.setProperty(
        "--opened-div-height",
        `${currentHeight}vh`
      );
    } else {
      document.documentElement.style.setProperty(
        "--closed-div-height",
        `${currentHeight}vh`
      );
    }
  }

  return (
    <div className={faqStyle} id={`faq_div${props.id}`}>
      <div className={styles.question_part}>
        <p
          className={styles.question_sign}
          onClick={() => {
            seeAnswerHandler();
            faqFirstVisibilityIsGone();
          }}
        >
          {seeAnswer ? "-" : "+"}
        </p>
        <p className={styles.question_text}>{props.question}</p>
      </div>
      <p className={answerText}>{props.answer}</p>
    </div>
  );
};

export default FAQElement;
