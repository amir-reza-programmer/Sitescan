import styles from "./Footer.module.css";

import sitescanIcon from "../../images/SitescanIcon.svg";
import linkedin from "../../images/Footer/Linkedin.svg";
import instagram from "../../images/Footer/Instagram.svg";
import telegram from "../../images/Footer/Telegram.svg";
import whatsapp from "../../images/Footer/Whatsapp.svg";

const Footer = () => {
  return (
    <div className={styles.footer_section}>
      <div className={styles.head_title}>
        <img src={sitescanIcon}></img>
        <p className={styles.title_text}>سایت اسکن</p>
      </div>
      <div className={styles.address_number}>
        <p className={styles.address}>
          تهران، خیابان کارگر شمالی، پردیس دانشکده‌های فنی دانشگاه تهران
          <br></br> شتاب‌دهنده اینومکث
        </p>
        <p className={styles.number}>021 - 12345678</p>
      </div>
      <div>
        <img className={styles.icon} src={whatsapp}></img>
        <img className={styles.icon} src={telegram}></img>
        <img className={styles.icon} src={instagram}></img>
        <img className={styles.icon} src={linkedin}></img>
      </div>
    </div>
  );
};

export default Footer;
