import FAQElement from "./common/FAQElement";
import faqList from "../data_information/faqList";

import styles from "./FAQSection.module.css";

const FAQSection = (props) => {
  return (
      <section className={styles.faq_section}>
        {faqList.map((faq, index) => (
          <FAQElement
            key={index}
            id={index}
            firstVisibility={props.firstVisibility}
            onFirstVisibilityIsGone={props.onFirstVisibilityIsGone}
            {...faq}
          ></FAQElement>
        ))}
      </section>
  );
};

export default FAQSection;
