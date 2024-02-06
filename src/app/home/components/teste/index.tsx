'use client'
import { useState } from 'react';
import styles from './styles.module.css'
const HomeTeste = () => {


    const [isClick, setIsClick] = useState<boolean>(false)
    
    const change = () => {
        setIsClick(click => !click)
    }

    return ( 
        <>
            <p  className={`${styles.section} ${isClick? styles.active : ''}`} >gabreiel dos santos eteves</p>
            <button onClick={()=> change()}>dasdasdas </button>
        </>
     );
}
 
export default HomeTeste;