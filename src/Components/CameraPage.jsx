import styles from "./CameraPage.module.css";
import cameraIcon from "../img/camera.svg";
import { useRef, useEffect } from "react";

export default function CameraPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if ("mediaDevices" in navigator) {
      async function getUserMedia() {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
          });
          videoRef.current.srcObject = stream;
        } catch (err) {
          console.log(err);
        }
      }
      getUserMedia();
    }
  }, []);

  return (
    <main className={styles.wrapper}>
      <video className={styles.camera} src={videoRef} autoPlay></video>
      <div className={styles.barBottom}>
        <button className={styles.button}>
          <img
            className={styles.cameraIcon}
            src={cameraIcon}
            alt="Camera Icon"
          />
        </button>
      </div>
    </main>
  );
}
