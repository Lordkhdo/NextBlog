import CreatorsName from "@/common/CreatorsName/CreatorsName";
import styles from "./style.module.css";
import Image from "next/image";
import { inter } from "@/app/fonts";
import DataCreation from "@/common/DataCreation/DataCreation";

type CardMainProps = {
    src: string;
    tituloMain: string;
    paragrafo: string;
    name: string;
};

const CardMain = ({ src, tituloMain, paragrafo, name }: CardMainProps) => {
    return (
        <div className={`${styles.cardMain} ${inter.className}`}>
            <div className={styles.Photo}>
                <Image
                    src={src} // dado a ser recebido
                    alt="imagem temp"
                    quality={100}
                    width={269.59}
                    height={243.23}
                />
            </div>
            <div className={styles.Text}>
                <h2 className={styles.head}>
                    {tituloMain} 
                </h2>
                <p className={styles.paragraph}>
                 
                    {paragrafo}
                </p>
                <div className={styles.BackCreatorName}>
                    <CreatorsName name={name} />
                </div>

                <div>
                    <DataCreation date="1/04/2024" />
                </div>
            </div>
        </div>
    );
};

export default CardMain;
