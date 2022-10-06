import styles from "./Footer.module.css";
import { useSelector } from "react-redux";
import sitescanIcon from "../../images/SitescanIcon.svg";
import socialMedia from "../../data_information/socialMedia";

const Footer = () => {
  const mobileView = useSelector((state) => state.mobile.mobileView);
  return (
    <div className={styles.footer_section}>
      <div className={styles.head_title}>
        <img
          className={mobileView ? styles.icon_mobile : null}
          src={sitescanIcon}
          alt="icon"
        ></img>
        <p
          className={mobileView ? styles.title_text_mobile : styles.title_text}
        >
          سایت اسکن
        </p>
      </div>
      <div className={styles.address_number}>
        {mobileView ? (
          <p
            className={
              styles.address +
              " " +
              `${mobileView ? styles.address_mobile : ""}`
            }
          >
            تهران، خیابان کارگر شمالی<br></br> پردیس دانشکده‌های فنی دانشگاه
            تهران
            <br></br> شتاب‌دهنده اینومکث
          </p>
        ) : (
          <p className={styles.address}>
            تهران، خیابان کارگر شمالی، پردیس دانشکده‌های فنی دانشگاه تهران
            <br></br> شتاب‌دهنده اینومکث
          </p>
        )}

        <p className={mobileView ? styles.number_mobile : styles.number}>
          021 - 61113358
        </p>
      </div>
      <div>
        {socialMedia.map((media) => (
          <a href={media.link} key={media.id}>
            <img
              className={
                mobileView ? styles.link_icon_mobile : styles.link_icon
              }
              src={media.pic}
            ></img>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
