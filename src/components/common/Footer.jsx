import styles from "./Footer.module.css";

import sitescanIcon from "../../images/SitescanIcon.svg";
import socialMedia from "../../data_information/socialMedia";

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
        <p className={styles.number}>021 - 61113358</p>
      </div>
      <div>
        {socialMedia.map((media) => (
          <a href={media.link}>
            <img className={styles.icon} src={media.pic}></img>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
