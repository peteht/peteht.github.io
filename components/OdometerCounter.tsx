import styles from "./OdometerCounter.module.scss";

const COUNT = "4892301";

export default function OdometerCounter() {
  return (
    <div className={styles.wrap}>
      <p className={styles.label}>You are visitor number</p>
      <div className={styles.odometer}>
        {COUNT.split("").map((digit, i) => (
          <span key={i} className={styles.digit}>{digit}</span>
        ))}
      </div>
    </div>
  );
}
