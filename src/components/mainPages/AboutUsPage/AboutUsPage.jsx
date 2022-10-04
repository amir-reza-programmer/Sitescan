import { Fragment } from "react";
import { useSelector } from "react-redux";

import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Descriptions from "./Descriptions";
import TeamMembers from "./TeamMembers";
import Customers from "./Customers";
import JoinUs from "../../common/JoinsUs";
import Footer from "../../common/Footer";

import styles from "../Pages.module.css";
import mainHeader from "../../../images/Headers/MainHeader.svg";

const AboutUsPage = () => {
  const mobileView = useSelector((state) => state.mobile.mobileView);

  const headerText = "راهی آسان، مطمئن و کم هزینه";
  const headerText_2 = "برای ورود کسب و کارها به دنیای اینترنت";

  const topDescription = (
    <p
      className={
        mobileView
          ? styles.mobile_page_description
          : styles.desk_page_description
      }
    >
      رسانه های دیجیتال می‌توانند نقشی کلیدی در افزایش کیفیت زندگی انسان ها ایفا
      کنند. ما با توجه و تمرکز بر کسب و کارهای ایرانی وارد این عرصه شدیم، به این
      امید که بتوانیم نقشی کوچک در بهبود و توسعه رسانه های دیجیتال فارسی داشته
      باشیم.
    </p>
  );

  return (
    <Fragment>
      <Navbar active="about_us"></Navbar>
      <Header
        headerImage={mainHeader}
        headerText={headerText}
        headerText_2={headerText_2}
      ></Header>
      {topDescription}
      <Descriptions mobileView={mobileView}></Descriptions>
      <TeamMembers></TeamMembers>
      <Customers></Customers>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </Fragment>
  );
};

export default AboutUsPage;
