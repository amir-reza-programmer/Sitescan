import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import MenuButton from "../../images/Navbar/MenuButton.svg";
import Icon from "../../images/SitescanIcon.svg";
import IranFlag from "../../images/IranFlag.svg";

import { useNavigate } from "react-router-dom";

const Navbar = ({ active }) => {
  const mobileView = useSelector((state) => state.mobile.mobileView);
  const menu = useRef();
  const menuButton = useRef();

  const navigate = useNavigate();

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

  const navOptionClick = (path) => {
    setIsOpen(!isOpened);
    setTimeout(() => {
      navigate(`/${path}`);
    }, 400);
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
            <span
              style={itemColor("contact_us", "FF9712")}
              onClick={() => {
                navOptionClick("contact_us");
              }}
            >
              تماس با ما
            </span>
            {blureShape("contact_us", "FF9712")}
          </div>
        </li>
        <li>
          <div>
            <span
              style={itemColor("faq", "00FF87")}
              onClick={() => {
                navOptionClick("faq");
              }}
            >
              سوالات متداول
            </span>
            {blureShape("faq", "00FF87")}
          </div>
        </li>
        <li>
          <div>
            <span
              style={itemColor("projects", "FFE585")}
              onClick={() => {
                navOptionClick("projects");
              }}
            >
              پروژه‌ها
            </span>
            {blureShape("projects", "FFE585")}
          </div>
        </li>
        <li>
          <div>
            <span
              style={itemColor("about_us", "FF51EB")}
              onClick={() => {
                navOptionClick("about_us");
              }}
            >
              درباره ما
            </span>
            {blureShape("about_us", "FF51EB")}
          </div>
        </li>
        <li>
          <div>
            <span
              style={itemColor("home", "2EC5FF")}
              onClick={() => {
                setIsOpen(!isOpened);
                setTimeout(() => {
                  navigate("/home");
                }, 2000);
              }}
            >
              خانه
            </span>
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
