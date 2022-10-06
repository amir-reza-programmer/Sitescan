import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import MenuButton from "../../images/Navbar/MenuButton.svg";
import Icon from "../../images/SitescanIcon.svg";
import IranFlag from "../../images/IranFlag.svg";

const Navbar = ({ active }) => {
  const mobileView = useSelector((state) => state.mobile.mobileView);
  const menu = useRef();
  const menuButton = useRef();
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        menu.current &&
        menuButton.current &&
        !menu.current.contains(event.target) &&
        !menuButton.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);
  const [isOpened, setIsOpen] = useState(false);
  const itemStyle = (name, color) => {
    if (active === name) {
      return {
        display: "inline-block",
        backgroundColor: `#${color}`,
      };
    }
    return {};
  };
  const itemColor = (name, color) => {
    if (active === name) {
      return {
        color: `#${color}`,
      };
    }
    return {};
  };
  useEffect(() => {
    console.log("now isopened ", isOpened);
  }, [isOpened]);
  const blureShape = (name, color) => {
    if (!mobileView) {
      return (
        <div className={styles.blure} style={itemStyle(name, color)}></div>
      );
    }
    return null;
  };
  const clickDropDownLi = () => {
    if (mobileView) {
      setIsOpen(false);
    }
  };
  const links = (
    // <Collapse isOpened={isOpened}>
    <div
      ref={menu}
      className={
        mobileView
          ? isOpened
            ? styles.drop_down
            : styles.drop_down__closed
          : styles.nav__center
      }
    >
      <ul>
        <li onClick={clickDropDownLi}>
          <div>
            <Link style={itemColor("contact_us", "FF9712")} to="/contact_us">
              تماس با ما
            </Link>
            {blureShape("contact_us", "FF9712")}
          </div>
        </li>
        <li>
          <div>
            <Link style={itemColor("faq", "00FF87")} to="/faq">
              سوالات متداول
            </Link>
            {blureShape("faq", "00FF87")}
          </div>
        </li>
        <li>
          <div>
            <Link style={itemColor("projects", "FFE585")} to="/projects">
              پروژه‌ها
            </Link>
            {blureShape("projects", "FFE585")}
          </div>
        </li>
        <li>
          <div>
            <Link style={itemColor("about_us", "FF51EB")} to="/about_us">
              درباره ما
            </Link>
            {blureShape("about_us", "FF51EB")}
          </div>
        </li>
        <li>
          <div>
            <Link style={itemColor("home", "2EC5FF")} to="/home">
              خانه
            </Link>
            {blureShape("home", "2EC5FF")}
          </div>
        </li>
      </ul>
    </div>
    // </Collapse>
  );
  return (
    <div className={styles["nav-parent"]}>
      <nav className={mobileView ? styles.nav_mobile : styles.nav}>
        {mobileView ? (
          <div className={styles.nav__right}>
            <div className="icon">
              {
                <img
                  onClick={() => {
                    setIsOpen(isOpened ? false : true);
                  }}
                  ref={menuButton}
                  src={MenuButton}
                  alt=""
                />
              }
            </div>
          </div>
        ) : null}
        <div className={mobileView ? styles.nav__center : styles.nav__right}>
          <img src={Icon} alt="" />
          <ul>
            <li>سایت‌اسکن</li>
          </ul>
        </div>
        {links}
        <div className={styles.nav__left}>
          <ul>
            <li>
              {!mobileView ? <span>فارسی</span> : null}
              <img src={IranFlag} alt="iran flag" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
