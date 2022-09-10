import { Fragment } from "react";

import Navbar from "../Navbar";
import Header from "../Header";

import styles from "./Pages.module.css";
import headerImage from "../../images/FAQHeader.svg";

const FAQPage = () => {
  const headerText = "سوالات متداول";

  return (
    <Fragment>
      <Navbar></Navbar>
      <Header
        headerImage={headerImage}
        headerText={headerText}
        additionalClass={styles.faq_header_text}
      ></Header>
    </Fragment>
  );
};

export default FAQPage;
