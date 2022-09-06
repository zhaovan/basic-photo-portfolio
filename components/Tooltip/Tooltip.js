import styles from "../../styles/Tooltip.module.css";

export default function Tooltip({ x, y, info }) {
  return (
    <span className={styles.tooltip} style={{ top: y + 40, left: x - 40 }}>
      {info}
    </span>
  );
}
