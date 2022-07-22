import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const CharacterItem = ({ characterUrl }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(characterUrl).then((res) => setCharacter(res.data));
  }, []);

  console.log(character);

  return (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt="" />
    </div>
  );
};

export default CharacterItem;
