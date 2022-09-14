import FAQElement from "./common/FAQElement";
import faqList from "../../../data_information/faqList";

import styles from "./FAQSection.module.css";

const FAQSection = () => {
  return (
    <section className={styles.faq_section}>
      {faqList.map((faq) => (
        <FAQElement key={faq.id} id={faq.id} {...faq}></FAQElement>
      ))}
    </section>
  );
};

export default FAQSection;
