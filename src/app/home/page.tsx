"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Hero from "./layouts/Hero";
const home = () => {
    return (
        <>
            <p className={`${styles.section}`}>
                <span className={`${styles.span}`}>teste123</span>
                <Hero />
            </p>
        </>
    );
};

export default home;
