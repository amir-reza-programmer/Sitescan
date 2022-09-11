import { Fragment } from "react";

import Navbar from "../Navbar";
import Header from "../Header";
import DevSteps from "../DevSteps";
import Cards from "../Cards";
import Projects from "../Projects";
import Footer from "../Footer";

import mainHeader from "../../images/Headers/MainHeader.svg";

const HomePage = () => {
  const headerText = "راهی آسان، مطمئن و کم هزینه";
  const headerText_2 = "برای ورود کسب و کارها به دنیای اینترنت";

  return (
    <Fragment>
      <Navbar active="home"></Navbar>
      <Header
        headerImage={mainHeader}
        headerText={headerText}
        headerText_2={headerText_2}
      ></Header>
      <DevSteps></DevSteps>
      <Cards></Cards>
      <Projects></Projects>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
