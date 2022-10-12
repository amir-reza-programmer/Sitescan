import Form from "../../common/Form";
import styles from "./ContactUs.module.css";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const mobileView = useSelector((state) => state.mobile.mobileView);
  const address1 = "تهران، خیابان کارگر شمالی";
  const address2 = "پردیس دانشکده‌های فنی دانشگاه تهران";
  const address3 = "شتاب‌دهنده اینومکث";
  const telephoneNumber = "021 - 61113358";
  const contact = (
    <p>
      {address1}
      <br />
      {address2}
      <br />
      {address3}
      <br />
      {telephoneNumber}
    </p>
  );

  return (
    <div className={mobileView ? styles.contact_us_mobile : styles.contact_us}>
      <div className={styles.right}>
        <div className={mobileView ? styles.contact_mobile : styles.contact}>
          {contact}
        </div>
        <div>
          <iframe
            className={mobileView ? styles.map_mobile : styles.map}
            title="map of sitescan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.029297014319!2d51.386237699999995!3d35.725498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e072b2ac28083%3A0xb4e0ff8eaf79bf7a!2sSchool%20of%20Mechanical%20Engineering!5e0!3m2!1sen!2s!4v1663509652333!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={styles.left}>
        <Form title="با ما در تماس باشید:" />
      </div>
    </div>
  );
};

export default ContactUs;
