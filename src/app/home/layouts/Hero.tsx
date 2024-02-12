"use client";

import { useState } from "react";
import styles from "../page.module.css";
import useGabriel from "@/hooks/useCreateItem";

const Hero = () => {
    const [itemArray, setItemArray] = useState<string[]>([
        "item1",
        "item2",
        "item3",
    ]);
    const CreateNewItem: () => void = () => {
        console.log("object");
    };
    const [Estado1, setEstado] = useGabriel(1);
    return (
        <div className={`${styles.centralize}`}>
            {Estado1}
            <div className={`${styles.box}`}>
                <div className={`${styles.headerBox}`}>
                    <input type="text" />
                    <button onClick={() => setEstado(5)}>criar</button>
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
