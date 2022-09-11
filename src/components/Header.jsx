import styles from "./Header.module.css";

const Header = ({
  headerImage,
  headerText,
  headerText_2 = "",
  additionalClass = "",
}) => {
  return (
    <div className={styles.header}>
      <p className={`${styles.text} ${additionalClass}`}>
        {headerText}
        <br></br>
        {headerText_2}
      </p>
      <img className={styles.img} src={headerImage} alt="Header Image" />
    </div>
  );
};

export default Header;
