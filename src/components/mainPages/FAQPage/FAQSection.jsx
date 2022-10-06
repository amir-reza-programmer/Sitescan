import FAQElement from "./common/FAQElement";
import faqList from "../../../data_information/faqList";
import { useSelector } from "react-redux";
import styles from "./FAQSection.module.css";

const FAQSection = () => {
  const mobileView = useSelector((state) => state.mobile.mobileView);

  return (
    <section
      className={mobileView ? styles.faq_section_mobile : styles.faq_section}
    >
      {faqList.map((faq) => (
        <FAQElement
          mobileView={mobileView}
          key={faq.id}
          id={faq.id}
          {...faq}
        ></FAQElement>
      ))}
    </section>
  );
};

export default FAQSection;
