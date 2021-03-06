import styles from "./CameraPage.module.css";
import cameraIcon from "../img/camera.svg";
import { useRef, useEffect, useState } from "react";

export default function CameraPage() {
  const [showVideo, setShowVideo] = useState(true);
  const [imgURL, setImgURL] = useState([]);
  const [notiPerm, setNotiPerm] = useState("");

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    getUserMedia();
    getNotiPerm();
  }, []);

  async function getUserMedia() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.log(err);
    }
  }

  function getNotiPerm() {
    Notification.requestPermission().then((perm) => setNotiPerm(perm));
  }

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
    setImgURL(imageData);
    setShowVideo(!showVideo);
  }

  function closeModal() {
    setShowVideo(!showVideo);
  }

  function saveImage() {
    const imageObject = {
      id: imgURL.length,
      url: imgURL,
    };

    const storageArray = [];

    const storage = JSON.parse(localStorage.getItem("pictures"));

    if (!storage) {
      storageArray.push(imageObject);
      localStorage.setItem("pictures", JSON.stringify(storageArray));
    } else {
      storage.push(imageObject);
      localStorage.setItem("pictures", JSON.stringify(storage));
    }

    createNoti();
    setShowVideo(!showVideo);
  }

  function createNoti() {
    if (notiPerm === "granted") {
      const notification = new Notification("Picture Saved", {
        body: "Your image is saved in localStorage!",
      });
    }
  }

  return (
    <main className={styles.wrapper}>
      <video
        style={!showVideo ? { display: "none" } : { display: "block" }}
        className={styles.camera}
        ref={videoRef}
        autoPlay
      />
      <section
        style={showVideo ? { display: "none" } : { display: "flex" }}
        className={styles.modalWrapper}
      >
        <section className={styles.modal}>
          <canvas className={styles.picture} ref={photoRef}></canvas>
          <div className={styles.buttonWrapper}>
            <button onClick={saveImage} className={styles.buttonSave}>
              S
            </button>
            <button onClick={closeModal} className={styles.buttonDelete}>
              D
            </button>
          </div>
        </section>
      </section>
      <section className={styles.barBottom}>
        <button onClick={getPicture} className={styles.button}>
          <img
            className={styles.cameraIcon}
            src={cameraIcon}
            alt="Camera Icon"
          />
        </button>
      </section>
    </main>
  );
}
