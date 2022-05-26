import styles from "./CameraPage.module.css";
import cameraIcon from "../img/camera.svg";
import { useRef, useEffect } from "react";

export default function CameraPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    };
    getUserMedia();
  }, []);

  function getPicture() {
    return;
  }

  return (
    <main className={styles.wrapper}>
      <video className={styles.camera} ref={videoRef} autoPlay />
      <div className={styles.barBottom}>
        <button onClick={getPicture} className={styles.button}>
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
