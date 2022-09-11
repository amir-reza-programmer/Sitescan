import { Fragment } from "react";

import Navbar from "../Navbar";
import Header from "../Header";
import FAQ from "../FAQSection";

import styles from "./Pages.module.css";
import FAQHeader from "../../images/Headers/FAQHeader.svg";

const FAQPage = (props) => {
  const headerText = "سوالات متداول";

  return (
    <Fragment>
      <Navbar></Navbar>
      <Header
        headerImage={FAQHeader}
        headerText={headerText}
        additionalClass={styles.faq_header_text}
      ></Header>
      <FAQ
        firstVisibility={props.firstVisibility}
        onFirstVisibilityIsGone={props.onFirstVisibilityIsGone}
      ></FAQ>
    </Fragment>
  );
};

export default FAQPage;
