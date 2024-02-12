import { useState } from 'react'
           
export default function useToogle(initialState: boolean):[boolean, () => void] {
  

  const [bool, setBool] = useState(initialState) // manipular para enviar
  
  const toogleState = () => setBool((state: boolean) => !state) //funçao que vai receber e modificar


  return [bool, toogleState]
}