import styles from "./CameraPage.module.css";
import cameraIcon from "../img/camera.svg";
import { useRef, useEffect, useState } from "react";

export default function CameraPage() {
  const [showVideo, setShowVideo] = useState(true);

  const videoRef = useRef(null);
  const photoRef = useRef(null);

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
    const ctx = photoRef.current.getContext("2d");
    ctx.drawImage(
      videoRef.current,
      0,
      0,
      photoRef.current.width,
      photoRef.current.height
    );
    const imageData = photoRef.current.toDataURL("image/png");
    console.log(imageData);
    setShowVideo(!showVideo);
  }

  return (
    <main className={styles.wrapper}>
      <video className={styles.camera} ref={videoRef} autoPlay />
      <canvas
        style={showVideo ? { display: "none" } : { display: "block" }}
        ref={photoRef}
      ></canvas>
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
