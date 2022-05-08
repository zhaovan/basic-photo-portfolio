import styles from "../../styles/Header.module.css";

export default function Header({ setPage }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.name}>Ivan Zhao</h1>
      <div className={styles.links}>
        <p className={styles.linkText} onClick={() => setPage("photos")}>
          Photos
        </p>
        <p className={styles.linkText} onClick={() => setPage("about")}>
          About
        </p>
      </div>
    </div>
  );
}
