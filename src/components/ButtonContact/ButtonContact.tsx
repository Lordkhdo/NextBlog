'use client'
import { ReactNode } from "react";
import styles from './ButtonContact.module.css'

type ButtonContactProps = {
    children?:ReactNode;
}

const ButtonContact = ({children}:ButtonContactProps) => {
    return ( 
        <button className={styles.button}>
            {children}
        </button>
     );
}
 
export default ButtonContact;