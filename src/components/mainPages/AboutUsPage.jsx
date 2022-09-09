import { Fragment } from "react";

import Navbar from "../Navbar";
import Header from "../Header";
import Descriptions from "../Descriptions";
import TeamMembers from "../TeamMembers";
import Customers from "../site";
import Footer from "../Footer";

const AboutUsPage = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <Descriptions></Descriptions>
      <TeamMembers></TeamMembers>
      <Customers></Customers>
      <Footer></Footer>
    </Fragment>
  );
};

export default AboutUsPage;
