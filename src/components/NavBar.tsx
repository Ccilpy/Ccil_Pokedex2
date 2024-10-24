

interface NavBarProps {
    PokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

function NavBar ({PokemonIndex, setPokemonIndex, pokemonList} : NavBarProps) {
    return (
        
            <nav>
            {pokemonList.map((Pokemon, index) => (
            <button type="button" key={Pokemon.name} onClick={() => setPokemonIndex(index)}> {Pokemon.name} </button>
))}
            </nav>
        
          );
}

export default NavBar;