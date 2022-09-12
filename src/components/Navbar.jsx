import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Icon from "../images/Icon.svg";

const Navbar = ({ active }) => {
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

  return (
    <div className={styles["nav-parent"]}>
      <nav className={styles.nav}>
        <div className={styles.nav__right}>
          <img src={Icon} alt="" />
          <ul>
            <li>سایت‌اسکن</li>
          </ul>
        </div>
        <div className={styles.nav__center}>
          <ul>
            <li>
              <div>
                <Link to="/contact_us">تماس با ما</Link>
                <div
                  className={styles.blure}
                  style={itemStyle("contact_us", "ffff")}
                ></div>
              </div>
            </li>
            <li>
              <div>
                <Link style={itemColor("faq", "00FF87")} to="/faq">
                  سوالات متداول
                </Link>
                <div
                  className={styles.blure}
                  style={itemStyle("faq", "00FF87")}
                ></div>
              </div>
            </li>
            <li>
              <div>
                <Link style={itemColor("projects", "FFE585")} to="/projects">
                  پروژه‌ها
                </Link>
                <div
                  className={styles.blure}
                  style={itemStyle("projects", "FFE585")}
                ></div>
              </div>
            </li>
            <li>
              <div>
                <Link style={itemColor("about_us", "FF51EB")} to="/about_us">
                  درباره ما
                </Link>
                <div
                  className={styles.blure}
                  style={itemStyle("about_us", "FF51EB")}
                ></div>
              </div>
            </li>
            <li>
              <div>
                <Link style={itemColor("home", "2EC5FF")} to="/home">
                  خانه
                </Link>
                <div
                  className={styles.blure}
                  style={itemStyle("home", "2EC5FF")}
                ></div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.nav__left}>
          <ul>
            <li>فارسی</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
