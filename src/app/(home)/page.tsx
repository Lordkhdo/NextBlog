"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import CardMain from "../components/CardMain/CardMain";
import Card from "../components/Card/Card";
import { useState } from "react";

export default function Home() {
    const data = Array(13)
        .fill(0)
        .map((_, index) => ({
            titulo: `Titulo ${index + 1}`,
            data: `${Math.floor(Math.random() * 10) + 1}/${
                Math.floor(Math.random() * 12) + 1
            }/${2000 + Math.floor(Math.random() * 10)}`,
        }));

    const [showMore, setShowMore] = useState(false);



    return (
        <div className={styles.body} style={{}}>
            <div className={styles.container}>
                <CardMain />

                <div className={`${styles.containerCard}`}>
                    {showMore
                        ? data.map((item, index) => (
                              <React.Fragment key={index}>
                                  {index % 3 === 0 && <br />}
                                  <Card titulo={item.titulo} data={item.data} />
                              </React.Fragment>
                          ))
                        : data.slice(0, 6).map((item, index) => (
                              <React.Fragment key={index}>
                                  {index % 3 === 0 && <br />}
                                  <Card titulo={item.titulo} data={item.data} />
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
