import logo from "../img/logo.svg";
import galleryIcon from "../img/gallery-icon.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.filler}></div>
      <div className={styles.filler}>
        <img className={styles.logo} src={logo} alt="Camera logo" />
      </div>
      <div className={styles.filler}>
        <img
          className={styles.galleryIcon}
          src={galleryIcon}
          alt="Gallery Icon"
        />
      </div>
    </section>
  );
}
