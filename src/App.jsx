import { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { mobileActions } from "./reduxStore/redux";
import HomePage from "./components/mainPages/HomePage/HomePage";
import AboutUsPage from "./components/mainPages/AboutUsPage/AboutUsPage";
import ProjectsPage from "./components/mainPages/ProjectsPage/ProjectsPage";
import FAQPage from "./components/mainPages/FAQPage/FAQPage";
import ContactUsPage from "./components/mainPages/ContactUsPage/ContactUsPage";

import "./App.module.css";

function App() {
  const dispatch = useDispatch();

  const windowSizeChangeHandler = () => {
    dispatch(mobileActions.checkMobileView());
  };

  useEffect(() => {
    window.addEventListener("resize", windowSizeChangeHandler);
    return () => {
      window.removeEventListener("resize", windowSizeChangeHandler);
    };
  }, []);

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
