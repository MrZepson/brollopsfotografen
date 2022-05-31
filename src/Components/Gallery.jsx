import styles from "./Gallery.module.css";

export default function Gallery() {
  const storage = JSON.parse(localStorage.getItem("pictures"));

  return (
    <main className={styles.wrapper}>
      <section className={styles.imageContainer}>
        {storage
          ? storage.map((item) => (
              <img
                className={styles.image}
                key={item.id}
                src={item.url}
                alt=""
              />
            ))
          : ""}
      </section>
    </main>
  );
}
