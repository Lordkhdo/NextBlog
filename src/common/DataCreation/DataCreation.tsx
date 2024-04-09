import styles from "./style.module.css";

type DataCreationProps = {
    date: string;
    oneLine?: boolean;
};

const DataCreation = ({ date, oneLine }: DataCreationProps) => (
    <div className={styles.box} style={{ display: oneLine ? "flex" : "" }}>
        <p
            className={styles.title}
            style={{ width:"99px" }}
        >
            {!oneLine && "Data:"}
        </p>
        <p
            className={styles.text}
            style={{ fontWeight: oneLine ? "200" : "400" }}
        >
            {date}
        </p>
    </div>
);

export default DataCreation;
