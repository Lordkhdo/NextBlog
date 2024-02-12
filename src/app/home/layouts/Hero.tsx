"use client";

import { useState } from "react";
import styles from "../page.module.css";

const Hero = () => {
    const [itemArray, setItemArray] = useState<string[]>([
        "item1",
        "item2",
        "item3",
    ]);

    const CreateNewItem: () => void = () => {
        console.log("object");
    };

    return (
        <div className={`${styles.centralize}`}>
            <div className={`${styles.box}`}>
                <div className={`${styles.headerBox}`}>
                    <input type="text" />
                    <button onClick={() => CreateNewItem()}>criar</button>
                </div>
                <div className={`${styles.bodyBox}`}>
                    {itemArray.map((item, index) => (
                        <p key={index}>{item} </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
