import { Fragment } from "react";

import Navbar from "../Navbar";
import Header from "../Header";
import FAQ from "../FAQSection";

import styles from "./Pages.module.css";
import FAQHeader from "../../images/Headers/FAQHeader.svg";

const FAQPage = () => {
  const headerText = "سوالات متداول";

  return (
    <Fragment>
      <Navbar active="faq"></Navbar>
      <Header
        headerImage={FAQHeader}
        headerText={headerText}
        additionalClass={styles.faq_header_text}
      ></Header>
      <FAQ></FAQ>
    </Fragment>
  );
};

export default FAQPage;
