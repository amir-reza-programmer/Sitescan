import { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./components/mainPages/HomePage";
import AboutUsPage from "./components/mainPages/AboutUsPage";
import ProjectsPage from "./components/mainPages/ProjectsPage";
import FAQPage from "./components/mainPages/FAQPage";
import ContactUsPage from "./components/mainPages/ContactUsPage";

import "./App.module.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  //const mobielView = width <= 768;   -> "it will be used in future progeressing."

  // const [firstVisibility, setFirstVisibility] = useState(true);   -> "it will be used in future progeressing."
  // const firstVisibilityIsGone = () => {
  //   setFirstVisibility(false);
  // };

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="about_us" element={<AboutUsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact_us" element={<ContactUsPage />} />
          <Route path="/" element={<Navigate replace to="home" />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
