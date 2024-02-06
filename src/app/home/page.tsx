'use client'
import { useState } from 'react';
import styles from './page.module.css'
const home = () => {
    const [testNumber , setTestNumber] = useState(false)
    const [Classes,setClasses] = useState([styles.section ,styles.active ])
    const mudarCor = () =>{
        if(testNumber){
            setTestNumber(false)
            return
        }
        setTestNumber(true)
    }   
    return ( 
        <>
            {testNumber ?
            <p  className={`${styles.section}`} >gabreiel dos santos eteves</p>:
            <p  className={`${styles.section} ${styles.active}`} >gabreiel dos santos eteves</p>
            }
            <button onClick={()=> mudarCor()}>dasdasdas </button>
        </>
     );
}
 
export default home;