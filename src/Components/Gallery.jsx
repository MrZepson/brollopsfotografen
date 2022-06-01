import { useState } from "react";
import styles from "./Gallery.module.css";
import Image from "./Image";

export default function Gallery() {
  const [render, setRender] = useState(false);
  const storage = JSON.parse(localStorage.getItem("pictures"));

  return (
    <main className={styles.wrapper}>
      <section className={styles.imageContainer}>
        {storage
          ? storage.map((item) => (
              <Image
                render={{ render, setRender }}
                key={item.id}
                url={item.url}
              />
            ))
          : ""}
      </section>
    </main>
  );
}
