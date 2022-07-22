import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CharacterItem from "./CharacterItem";

const RickMorty = () => {
  const user = useSelector((state) => state.user);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results));
  }, []);

  console.log(characters);

  return (
    <div>
      <h1>RickMorty</h1>
      <p>
        Bienvenido <b>{user}</b> esta es la rick morty wiki
      </p>

      <ul>
        {characters.map((character) => (
          <CharacterItem characterUrl={character.url} key={character.url} />
        ))}
      </ul>
    </div>
  );
};

export default RickMorty;
