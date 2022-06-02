import styles from "./Image.module.css";

export default function Image({ url, render }) {
  function deleteImage() {
    const storage = JSON.parse(localStorage.getItem("pictures"));
    const targetImage = storage.findIndex((item) => item.url === url);

    storage.splice(targetImage, 1);

    localStorage.setItem("pictures", JSON.stringify(storage));
    render.setRender(!render.render);
  }

  return (
    <section className={styles.imageContainer}>
      <button onClick={deleteImage} className={styles.cross}>
        X
      </button>
      <img className={styles.image} src={url} alt=""></img>
    </section>
  );
}
