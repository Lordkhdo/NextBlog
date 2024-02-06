import { useState } from 'react'

export default function useToogle(initialState: boolean) {
  const [bool, setBool] = useState(initialState)

  const toogleState = () => setBool((state: boolean) => !state)

  return [bool, toogleState]
}