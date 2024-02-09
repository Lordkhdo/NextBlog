"use client";
import styles from "./header.module.css";

import HeaderButtonSobre from "./HeaderButtonSobre/HeaderButtonSobre";
import ButtonContact from "./ButtonContact/ButtonContact";

const Header = () => {
  return (
    <>
      <header className={styles.BlackColor}>
        <div className={styles.container}>
          <div className={styles.leftContainerHeader}>
            <img src="/HeaderImgs/FotoWhiteLogo.png" alt="Landscape picture" />
            <p>coutosolar</p>
          </div>
          <div className={styles.RightContainerHeader}>
            <HeaderButtonSobre>sobre</HeaderButtonSobre>
            <ButtonContact>Contato</ButtonContact>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
