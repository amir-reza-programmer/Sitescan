import { Fragment } from "react";

import Navbar from "../Navbar";
import Header from "../Header";
import Descriptions from "../Descriptions";
import TeamMembers from "../TeamMembers";
import Customers from "../Customers";
import Footer from "../Footer";

import headerImage from "../../images/MainHeader.svg";

const AboutUsPage = () => {
  const headerText =
    "راهی آسان، مطمئن و کم هزینه برای ورود کسب و کارها به دنیای اینترنت";

  return (
    <Fragment>
      <Navbar></Navbar>
      <Header headerImage={headerImage} headerText={headerText}></Header>
      <Descriptions></Descriptions>
      <TeamMembers></TeamMembers>
      <Customers></Customers>
      <Footer></Footer>
    </Fragment>
  );
};

export default AboutUsPage;
