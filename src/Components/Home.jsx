import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
      <button onClick={() => navigate("/camera")} className={styles.button}>
        Capture Moment!
      </button>
      <button onClick={() => navigate("/gallery")} className={styles.button}>
        View Gallery
      </button>
    </main>
  );
}
