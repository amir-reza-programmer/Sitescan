import { Fragment } from "react";

import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import Descriptions from "./Descriptions";
import TeamMembers from "./TeamMembers";
import Customers from "./Customers";
import JoinUs from "../../common/JoinsUs";
import Footer from "../../common/Footer";

import mainHeader from "../../../images/Headers/MainHeader.svg";

const AboutUsPage = () => {
  const headerText = "راهی آسان، مطمئن و کم هزینه";
  const headerText_2 = "برای ورود کسب و کارها به دنیای اینترنت";

  return (
    <Fragment>
      <Navbar active="about_us"></Navbar>
      <Header
        headerImage={mainHeader}
        headerText={headerText}
        headerText_2={headerText_2}
      ></Header>
      <Descriptions></Descriptions>
      <TeamMembers></TeamMembers>
      <Customers></Customers>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </Fragment>
  );
};

export default AboutUsPage;
