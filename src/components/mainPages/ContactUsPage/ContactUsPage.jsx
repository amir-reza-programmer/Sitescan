import React from "react";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import ContactUs from "./ContactUs";

const ContactUsPage = () => {
  return (
    <React.Fragment>
      <Navbar active="contact_us" />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
};

export default ContactUsPage;
