import { Fragment } from "react";
import { useSelector } from "react-redux";

import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import DevSteps_Desktop from "./DevSteps_Desktop";
import DevSteps_Mobile from "./DevSteps_Mobile";
import Cards from "./Cards";
import Projects_Desktop from "./Projects_Desktop";
import Projects_Mobile from "./Projects_Mobile";
import JoinUs from "../../common/JoinsUs";
import Footer from "../../common/Footer";

import styles from "../Pages.module.css";
import mainHeader from "../../../images/Headers/MainHeader.svg";

const HomePage = () => {
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
      اینترنت یک فرصت است برای کسب و کارها. داشتن یک وبسایت خوب می‌تواند اولین و
      مهم ترین گام شما برای رشد و گسترش کسب و کارتان در اینترنت باشد. این کار را
      به سایت اسکن بسپارید و بر مراحل بعدی گسترش کسب و کارتان تمرکز کنید.
    </p>
  );

  return (
    <Fragment>
      <Navbar active="home"></Navbar>
      <Header
        headerImage={mainHeader}
        headerText={headerText}
        headerText_2={headerText_2}
      ></Header>
      {topDescription}
      {mobileView ? <DevSteps_Mobile /> : <DevSteps_Desktop />}
      <Cards mobileView={mobileView}></Cards>
      {mobileView ? <Projects_Mobile /> : <Projects_Desktop />}
      <JoinUs></JoinUs>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
