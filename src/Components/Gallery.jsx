import styles from "./Gallery.module.css";
import Picture from "./Picture";

export default function Gallery() {
  const testArray = [1, 2, 3, 4, 5, 6];

  return (
    <main className={styles.wrapper}>
      {testArray.map((item, index) => (
        <Picture key={index} />
      ))}
    </main>
  );
}
