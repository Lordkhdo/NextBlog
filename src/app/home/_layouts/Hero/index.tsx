'use client'; 

import styles from './styles.module.css'

import useToogle from "@/common/hooks/useToogle";

interface Props {}

export default function Hero({}: Props) {
  const [isActive, toogleIsActive] = useToogle(false)
  const className = `${styles.base} ${isActive ? styles.red : ''}`

  return (
    <>
      <p className={className}>Gabriel Esteves Dos Santos</p>
      <button onClick={toogleIsActive}>Change Color</button>
    </>
  )
}