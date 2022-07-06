import { FC } from "react";

type CharacterProps = {
  id: number;
}

const Character: FC<CharacterProps> = ({ id }: CharacterProps) => {
  return (
    <h1 className="text-white">Soy un caracter { id }</h1>
  )
}

export default Character;