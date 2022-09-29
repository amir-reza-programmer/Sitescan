import { useState, useEffect, useRef } from "react";

import styles from "./FAQElement.module.css";

const FAQElement = (props) => {
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
    <div className={styles.faq} id={`faq_div${props.id}`}>
      <div className={styles.question_part}>
        <p className={styles.question_sign} onClick={showAnswerHandler}>
          {/* {showAnswer ? "-" : "+"} */}
          a
        </p>
        <p className={styles.question_text}>{props.question}</p>
      </div>
      <div className={styles.answer_text_container} style={{ height: divHeight }}>
        <p ref={ref} className={styles.answer_text}>
          {props.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQElement;
