import { Fragment } from "react";

import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import FAQ from "./FAQSection";
import JoinUs from "../../common/JoinsUs";
import Footer from "../../common/Footer";

import styles from "../Pages.module.css";
import FAQHeader from "../../../images/Headers/FAQHeader.svg";

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
      <JoinUs></JoinUs>
      <Footer></Footer>
    </Fragment>
  );
};

export default FAQPage;
