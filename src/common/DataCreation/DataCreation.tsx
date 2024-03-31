import styles from "./style.module.css"

const DataCreation = ({ date }: { date: string }) => (
  <div className={styles.box}>
    <p className={styles.title}>Data de criação:</p>
    <p className={styles.text}>{date}</p>
  </div>
);

export default DataCreation;
