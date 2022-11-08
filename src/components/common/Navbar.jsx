import { useState, useEffect, useRef } from "react";
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
  const activeEl = useRef(null);

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
        backgroundColor: `${color}`,
      };
    }
    return {};
  };
  const itemColor = (name, color) => {
    if (active === name) {
      return {
        color: color,
      };
    }
    return {};
  };
  const blureShape = (name, color) => {
    if (!mobileView) {
      return (
        <div className={styles.blure} style={itemStyle(name, color)}></div>
      );
    }
    return null;
  };

  const navOptions = [
    {
      id: 0,
      title: "contact_us",
      text: "تماس با ما",
      color: "#FF9712",
    },
    {
      id: 1,
      title: "faq",
      text: "سوالات متداول",
      color: "#00FF87",
    },
    {
      id: 2,
      title: "projects",
      text: "پروژه‌ها",
      color: "#FFE585",
    },
    {
      id: 3,
      title: "about_us",
      text: "درباره ما",
      color: "#FF51EB",
    },
    {
      id: 4,
      title: "home",
      text: "خانه",
      color: "#2EC5FF",
    },
  ];

  const navOptionClick = (path, e) => {
    setIsOpen(!isOpened);
    if (active !== path) {
      if (mobileView) {
        activeEl.current.style.color = "white";
        setTimeout(() => {
          navigate(`/${path}`);
        }, 400);
      } else {
        navigate(`/${path}`);
      }
    }
  };
  const links = (
    <div
      className={
        mobileView
          ? isOpened
            ? styles.drop_down
            : styles.drop_down__closed
          : styles.nav__center
      }
    >
      <ul>
        {navOptions.map((navOption) => (
          <li key={navOption.id}>
            <div>
              <span
                ref={active === navOption.title ? activeEl : null}
                className={styles[navOption.title]}
                style={itemColor(navOption.title, navOption.color)}
                onClick={(e) => {
                  navOptionClick(navOption.title, e);
                }}
              >
                {navOption.text}
              </span>
              {blureShape(navOption.title, navOption.color)}
            </div>
          </li>
        ))}
      </ul>
    </div>
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
