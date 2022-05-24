import logo from "../img/logo.svg";
import galleryIcon from "../img/gallery-icon.svg";
import house from "../img/home.svg";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isHomePage, setIsHomePage] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    window.location.pathname === "/"
      ? setIsHomePage(true)
      : setIsHomePage(false);
  }, [window.location.pathname]);

  return (
    <section className={styles.header}>
      <div className={styles.arrowBox}>
        {isHomePage ? (
          ""
        ) : (
          <img
            onClick={() => navigate("/")}
            className={styles.arrow}
            src={house}
            alt="Backarrow"
          />
        )}
      </div>
      <div className={styles.filler}>
        <img className={styles.logo} src={logo} alt="Camera logo" />
      </div>
      <div className={styles.filler}>
        {window.location.pathname === "/camera" ? (
          <img
            onClick={() => navigate("/gallery")}
            className={styles.galleryIcon}
            src={galleryIcon}
            alt="Gallery Icon"
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
