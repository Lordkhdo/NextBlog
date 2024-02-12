"use client";

import { useState } from "react";
import styles from "../page.module.css";
import useCreateItem from "@/hooks/useCreateItem";

const Hero = () => {
    const [inputValue, itemArray, createNewItem, setInputValue] =
        useCreateItem("");

    return (
        <div className={`${styles.centralize}`}>
            <div className={`${styles.box}`}>
                <div className={`${styles.headerBox}`}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={createNewItem}>criar</button>
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
