

interface NavBarProps {
    PokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

function NavBar ({PokemonIndex, setPokemonIndex, pokemonList} : NavBarProps) {
    const handleClick = (index: number) => { if (pokemonList[index].name === "pikachu")
        alert("pika pikachu !!!") 
        setPokemonIndex(index);
      };

    return (
            <nav>
            {pokemonList.map((Pokemon, index) => (
            <button type="button" key={Pokemon.name} onClick={() => handleClick(index)}> {Pokemon.name} </button>
            ))}
            </nav>
          );

}

export default NavBar;