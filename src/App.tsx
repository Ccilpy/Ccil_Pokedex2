import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {
	const [PokemonIndex, setPokemonIndex] = useState(0);
	useEffect(
		() => {
		  alert("hello pokemon trainer :)");
		},
		[]
	  );
  return (
    <>
      <div>
	  	<NavBar 
		  PokemonIndex={PokemonIndex}
          setPokemonIndex={setPokemonIndex}
          pokemonList={pokemonList}/>

        <PokemonCard pokemon={pokemonList[PokemonIndex]} />
      </div>
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
