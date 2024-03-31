import styles from "./page.module.css";
import Image from "next/image";
import { imageStyle } from "./imageStyle";

interface DadosImagem {
    src?: string;
    name?:string
}

export const CreatorsName = ({src,name}:DadosImagem) => {
    return (
        <div className={styles.NameUser}>
            <Image
                height={17.1}
                width={17.1}
                src={src?src:"/HomePhotos/Imagem_Gabriel.svg"}
                alt="Imagem"
                style={imageStyle}
            />
            <p className={styles.fontStyle}>{name?name:"Lordkhdo"}</p>
            
        </div>
    );
};

export default CreatorsName;
