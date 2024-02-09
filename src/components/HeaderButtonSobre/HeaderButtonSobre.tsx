'use client'
import { ReactNode } from "react";
import styles from './HeaderButtonSobre.module.css'
type HeaderButtonProps = {
    children: ReactNode;
}

const HeaderButtonSobre = ({children}:HeaderButtonProps) => {
    return ( 
        <button className={`${styles.button}`}>
            {children}
        </button>
     );
}
 
export default HeaderButtonSobre;