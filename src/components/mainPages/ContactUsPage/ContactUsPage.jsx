import { Fragment } from "react";

import Navbar from "../../common/Navbar";
import ContactUs from "./ContactUs";
import JoinUs from "../../common/JoinsUs";
import Footer from "../../common/Footer";

const ContactUsPage = ({ mobileView }) => {
  return (
    <Fragment>
      <Navbar active="contact_us" />
      <ContactUs />
      <JoinUs />
      <Footer />
    </Fragment>
  );
};

export default ContactUsPage;
