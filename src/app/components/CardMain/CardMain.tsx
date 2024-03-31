import CreatorsName from "@/common/CreatorsName/CreatorsName";
import styles from "./style.module.css";
import Image from "next/image";
import { inter } from "@/app/fonts";
import DataCreation from "@/common/DataCreation/DataCreation";

const CardMain = () => {
    return (
        <div className={`${styles.cardMain} ${inter.className}`}>
            <div className={styles.Photo}>
                <Image
                    src="/HomePhotos/Atronauta.png" // dado a ser recebido
                    alt="imagem temp"
                    quality={100}
                    width={269.59}
                    height={243.23}
                />
            </div>
            <div className={styles.Text}>
                <h2 className={styles.head}>
                    Desenvolvendo <br /> um site em nextJs {/*  dado a ser recebido */}
                </h2>
                <p className={styles.paragraph}> {/*  dado a ser recebido */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                    vehicula quam a orci porta.
                </p>
                <div className={styles.BackCreatorName}>
                    <CreatorsName />{/*  dado a ser recebido */}
                </div>

                <div>
                    <DataCreation date="gabriel" />{/*  dado a ser recebido */}
                </div>
            </div>
        </div>
    );
};

export default CardMain;
