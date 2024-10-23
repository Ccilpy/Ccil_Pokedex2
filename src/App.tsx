import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";

function App() {
  const [PokemonIndex, setPokemonIndex] = useState(0);
  const handleClickNext = () => {
    setPokemonIndex((PokemonIndex) => (PokemonIndex + 1) % pokemonList.length);
  };
  const handleClickPrevious = () => {
    setPokemonIndex(
      (PokemonIndex) =>
        (PokemonIndex - 1 + pokemonList.length) % pokemonList.length
    );
  };
  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[PokemonIndex]} />
      </div>
      {PokemonIndex > 0 && (
        <button type="button" onClick={handleClickPrevious}>
          Précédent
        </button>
      )}
      {PokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={handleClickNext}>
          Suivant
        </button>
      )}
    </>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App;
