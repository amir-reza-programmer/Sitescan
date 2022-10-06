import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = ({
  headerImage,
  headerText,
  headerText_2 = "",
  additionalClass = "",
}) => {
  const mobileView = useSelector((state) => state.mobile.mobileView);
  return (
    <div className={mobileView ? styles.header_mobile : styles.header}>
      <p
        className={`${
          mobileView ? styles.text_mobile : styles.text
        } ${additionalClass}`}
      >
        {headerText}
        <br></br>
        {headerText_2}
      </p>
      <img
        className={mobileView ? styles.img_mobile : styles.img}
        src={headerImage}
        alt="Header"
      />
    </div>
  );
};

export default Header;
