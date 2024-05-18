import Form from "../../common/Form";
import styles from "./ContactUs.module.css";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const mobileView = useSelector((state) => state.mobile.mobileView);
  const address1 = "تهران، خیابان کارگر شمالی";
  const address2 = "پردیس دانشکده‌های فنی دانشگاه تهران";
  const telephoneNumber = "021 - 61112222";
  const contact = (
    <p>
      {address1}
      <br />
      {address2}
      <br />
      {telephoneNumber}
    </p>
  );

  return (
    <div className={mobileView ? styles.contact_us_mobile : styles.contact_us}>
      <p className={mobileView ? styles.title_mobile : styles.title}>
        تماس با ما
      </p>
      <div className={mobileView ? styles.parent_mobile : styles.parent}>
        <div>
          <div className={mobileView ? styles.contact_mobile : styles.contact}>
            {contact}
          </div>
          <div>
            <iframe
              className={mobileView ? styles.map_mobile : styles.map}
              title="map of sitescan"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d136028.67980322163!2d51.42375285320312!3d36.70868978429874!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1716028083428!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div>
          <Form title="با ما در تماس باشید:" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
