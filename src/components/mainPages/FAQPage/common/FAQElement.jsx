import { useState, useEffect, useRef } from "react";

import styles from "./FAQElement.module.css";

const FAQElement = (props) => {
  const { mobileView } = props;
  const [showAnswer, setShowAsnwer] = useState(false);
  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (showAnswer) setDivHeight(ref.current.getBoundingClientRect().height);
    else setDivHeight(0);
  }, [showAnswer]);

  const showAnswerHandler = () => {
    setShowAsnwer((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div
      onClick={showAnswerHandler}
      className={styles.faq + ` ${mobileView ? styles.faq_mobile : null}`}
      id={`faq_div${props.id}`}
    >
      <div
        className={
          styles.question_part +
          ` ${mobileView ? styles.question_part_mobile : null}`
        }
      >
        <p
          className={
            mobileView ? styles.question_sign_mobile : styles.question_sign
          }
        >
          {showAnswer ? "-" : "+"}
        </p>
        <p
          className={
            mobileView ? styles.question_text_mobile : styles.question_text
          }
        >
          {props.question}
        </p>
      </div>
      <div
        className={styles.answer_text_container}
        style={{ height: divHeight }}
      >
        <p
          ref={ref}
          className={
            styles.answer_text +
            ` ${mobileView ? styles.answer_text_mobile : null}`
          }
        >
          {props.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQElement;
