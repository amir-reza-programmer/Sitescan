import styles from "./Header.module.css";

const Header = ({headerImage, headerText, additionalClass = ""}) => {
  return (
    <div className={styles.header}>
      <p className={`${styles.text} ${additionalClass}`}>{headerText}</p>
      <img className={styles.img} src={headerImage} alt="HeaderImage" />
    </div>
  );
};

export default Header;
