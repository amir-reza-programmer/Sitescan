import { Fragment } from "react";

import Navbar from "../../common/Navbar";
import ProjectsSection from "./ProjectsSection";
import JoinUs from "../../common/JoinsUs";
import Footer from "../../common/Footer";

const ProjectsPage = () => {
  return (
    <Fragment>
      <Navbar active="projects"></Navbar>
      <ProjectsSection></ProjectsSection>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </Fragment>
  );
};

export default ProjectsPage;
