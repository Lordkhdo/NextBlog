"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import styles from "./style.module.css";
import DataCreation from "@/common/DataCreation/DataCreation";
import CreatorsName from "@/common/CreatorsName/CreatorsName";

const Card = ({ params }: { params: { id: string } }) => {
    // ! lembrar de estudar a linha -- 13/23
    const searchParams = useSearchParams();
    const { titulo, data, id, codLink1, codLink2, desc, src, titulo2 } =
        Object.fromEntries(searchParams.entries());

    //crie um codico para voltar a raiz do projeto
    const router = useRouter();
    const IrLinkPagina = () => router.push("/");

    return (
        <div className={styles.container}>
            <div className={styles.DivCentralizer}>
                <div className={styles.buttonTransparentContainer}>
                    <button
                        className={styles.button}
                        onClick={() => IrLinkPagina()}
                    >
                        voltar
                    </button>
                </div>
            </div>
            <div className={styles.TransparentCard}>
                {/* card */}
                <div className={styles.background}>
                    <div
                        className={styles.photo}
                        style={{ backgroundImage: `url(${src})` }}
                    ></div>\
                    {/*  photo ta no css */}

                    <div className={styles.Centralizar}>
                        <div className={styles.BoxHeight}>
                            <h2 className={styles.head}>{titulo}</h2>

                            <div className={styles.BackCreatorName}>
                                <CreatorsName name={"Gabriel"} />
                                <DataCreation date={data} oneLine={true} />
                            </div>
                            <div className={styles.DateName}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.RightContainer}>
                    <div className={styles.TextContainer}>
                        <h2 className={styles.titleText}>{titulo2}</h2>
                        <p className={styles.Text}>{desc}</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.buttonCode}>
                            Ver codico {codLink1}
                        </button>
                        <button className={styles.buttonCode}>
                            Ver projeto {codLink2}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
