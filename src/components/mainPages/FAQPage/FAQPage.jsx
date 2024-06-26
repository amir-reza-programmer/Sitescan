import { Fragment } from "react";
import { useSelector } from "react-redux";

import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Form from "../../common/Form";
import FAQSection from "./FAQSection";
import JoinUs from "../../common/JoinsUs";
import Footer from "../../common/Footer";

import styles from "../Pages.module.css";
import FAQHeader from "../../../images/Headers/FAQHeader.svg";

const FAQPage = () => {
  const mobileView = useSelector((state) => state.mobile.mobileView);

  const headerText = "سوالات متداول";

  return (
    <Fragment>
      <Navbar active="faq"></Navbar>
      <Header
        headerImage={FAQHeader}
        headerText={headerText}
        additionalClass={!mobileView ? styles.faq_header_text : ""}
      ></Header>
      <FAQSection mobileView={mobileView}></FAQSection>
      <div className={mobileView? null: styles.faq_from_align}>
        <Form title={`از ما بپرسید${mobileView? "": ":"}`} />
      </div>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </Fragment>
  );
};

export default FAQPage;
