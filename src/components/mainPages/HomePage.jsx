import { Fragment } from "react";

import Navbar from "../Navbar";
import Header from "../Header";
import DevSteps from "../DevSteps";
import Cards from "../Cards";
import Projects from "../Projects";
import Footer from "../Footer";

import headerImage from "../../images/MainHeader.svg";

const HomePage = () => {
  const headerText =
    "راهی آسان، مطمئن و کم هزینه برای ورود کسب و کارها به دنیای اینترنت";

  return (
    <Fragment>
      <Navbar></Navbar>
      <Header headerImage={headerImage} headerText={headerText}></Header>
      <DevSteps></DevSteps>
      <Cards></Cards>
      <Projects></Projects>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
