import Character from "@/components/Character"
import { useState } from "react";

const RandomCharacter = () => {

  const [ id, setID ] = useState(0)

  const randomlyId = () => {
    const newID = Math.floor(Math.random() * 10) + 1;
    setID(newID)
  }

  return (
    <>
      <button onClick={randomlyId} className="text-white p-1 border-2 border-white border-solid hover:bg-white hover:text-black rounded"> Obtén un Caracter </button>
      <Character id={id} />
    </>
  )
}

export default RandomCharacter;