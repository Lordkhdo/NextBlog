"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import CardMain from "../components/CardMain/CardMain";
import { useRouter } from "next/navigation";
import Card from "../components/Card/Card";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
    /// mock dado exemple

    const [showMore, setShowMore] = useState(false);
    const router = useRouter();

    type CardData = {
        id: number;
        src: string;
        titulo: string;
        titulo2: string;
        desc: string;
        codLink1: string;
        codLink2: string;
        data: string;
    };

    // const data = Array(13)
    //     .fill(0)
    //     .map((_, index) => ({
    //         id: index + 1,
    //         name: "Gabriel",
    //         titulo: `Titulo ${index + 1}`,
    //         data: `${Math.floor(Math.random() * 10) + 1}/${
    //             Math.floor(Math.random() * 12) + 1
    //         }/${2000 + Math.floor(Math.random() * 10)}`,
    //     }));

    const data = Array(10)
        .fill(0)
        .map((_, index) => ({
            id: index + 1,
            src: `/homePhotos/Atronauta.png`,
            titulo: `titulo${index + 1}`,
            titulo2: `titulo${index + 2}`,
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed vehicula quam a orci porta, sed commodo
            est scelerisque. Integer ut fermentum mauris.
            Vestibulum eget urna ac justo scelerisque tempor.
            Mauris auctor sollicitudin nisl, id cursus justo
            aliquet sed. Sed nec justo nec ex ullamcorper
            semper. Sed vel felis in arcu pretium pulvinar.
            Integer eu eros nec lacus pulvinar fermentum. Proin
            pharetra sapien sit amet mi facilisis. Integer eu
            eros nec lacus pulvinar fermentum. Proin pharetra
            sapien sit amet mi facilisis.`,
            codLink1: `codLink${index + 1}`,
            codLink2: `codLink${index + 2}`,
            data: `${Math.floor(Math.random() * 10) + 1}/${
                Math.floor(Math.random() * 12) + 1
            }/${2000 + Math.floor(Math.random() * 10)}`,
        }));

    const IrLinkPagina = (item: CardData) => {
        router.push(
            `/card/?id=${item.id}&titulo=${item.titulo}&data=${item.data}&codLink1=${item.codLink1}&codLink2=${item.codLink2}&desc=${item.desc}&src=${item.src}&titulo2=${item.titulo2}`
        );
    };

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <CardMain //! ----------------------------
                    src="/HomePhotos/Atronauta.png"
                    name="Gabriel"
                    paragrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula quam a orci porta."
                    tituloMain="Desenvolvendo um site em nextJs"
                />

                <div className={`${styles.containerCard}`}>
                    {showMore
                        ? data.map((item, index) => (
                              <React.Fragment key={index}>
                                  {index % 3 === 0 && <br />}
                                  <div>
                                      <Card // ? --------------------------------
                                          titulo={item.titulo}
                                          data={item.data}
                                          name={"Gabriel"}
                                          onClick={() => IrLinkPagina(item)}
                                      />
                                  </div>
                              </React.Fragment>
                          ))
                        : data.slice(0, 6).map((item, index) => (
                              <React.Fragment key={index}>
                                  {index % 3 === 0 && <br />}
                                  <div>
                                      <Card // ? --------------------------------
                                          titulo={item.titulo}
                                          data={item.data}
                                          onClick={() => IrLinkPagina(item)}
                                          name={"Gabriel"}
                                      />
                                  </div>
                              </React.Fragment>
                          ))}

                    {data.length > 6 && (
                        <div className={styles.containerButton}>
                            <div>
                                <button
                                    className={styles.button}
                                    onClick={() => setShowMore((prev) => !prev)}
                                >
                                    {showMore ? "↑" : "↓"}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
