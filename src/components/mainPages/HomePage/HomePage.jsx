import { Fragment } from "react";

import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import DevSteps from "./DevSteps";
import Cards from "./Cards";
import Projects from "./Projects";
import JoinUs from "../../common/JoinsUs";
import Footer from "../../common/Footer";

import mainHeader from "../../../images/Headers/MainHeader.svg";

const HomePage = () => {
  const headerText = "راهی آسان، مطمئن و کم هزینه";
  const headerText_2 = "برای ورود کسب و کارها به دنیای اینترنت";

  const description = (
    <p
      style={{
        width: "60vw",
        textAlign: "center",
        margin: "6vh auto 7vh auto",
        fontWeight: "300",
        color: "white",
        fontSize: "1.4vw",
      }}
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
      {description}
      <DevSteps></DevSteps>
      <Cards></Cards>
      <Projects></Projects>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
