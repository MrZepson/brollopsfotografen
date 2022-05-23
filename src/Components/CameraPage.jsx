import styles from "./CameraPage.module.css";
import cameraIcon from "../img/camera.svg";

export default function CameraPage() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.camera}></div>
      <div className={styles.barBottom}>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <img
              className={styles.cameraIcon}
              src={cameraIcon}
              alt="Camera Icon"
            />
          </button>
        </div>
      </div>
    </main>
  );
}
