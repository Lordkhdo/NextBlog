import DataCreation from "@/common/DataCreation/DataCreation";
import CreatorsName from "@/common/CreatorsName/CreatorsName";
import styles from "./Card.module.css";
type CardProps = {
    titulo: string;
    data: string;
};

const Card = ({ titulo, data }: CardProps) => {
    return (
        <div className={styles.background}>
            <div className={styles.photo}></div>
            <div className={styles.Centralizar}>
                <div className={styles.BoxHeight}>
                    <h2 className={styles.head}>{titulo}</h2>

                    <div className={styles.BackCreatorName}>
                        <CreatorsName />
                    </div>
                    <div className={styles.DateName}>
                        <DataCreation date={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
