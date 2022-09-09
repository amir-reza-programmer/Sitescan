import { Fragment } from "react";

import Navbar from "../Navbar";
import Header from "../Header";
import DevSteps from "../DevSteps";
import Cards from "../Cards";
import Projects from "../Projects";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <DevSteps></DevSteps>
      <Cards></Cards>
      <Projects></Projects>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
