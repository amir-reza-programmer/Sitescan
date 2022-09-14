import Form from "../../common/Form";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const address1 = "تهران، خیابان کارگر شمالی";
  const address2 = "پردیس دانشکده‌های فنی دانشگاه تهران";
  const address3 = "شتاب‌دهنده اینومکث";
  const telephoneNumber = "021 - 12345678";
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
    <div className={styles["contact-us"]}>
      <div className={styles.right}>
        <div className={styles.contact}>{contact}</div>
        <div className={styles.map}>
          <iframe
            title="map of sitescan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16070928.724173356!2d-90.21254551559255!3d40.673148678091025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sde!4v1663127381110!5m2!1sen!2sde"
            width="400"
            height="300"
            style={{ border: 0 }}
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
