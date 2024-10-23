

interface NavBarProps {
    PokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

function NavBar ({PokemonIndex, setPokemonIndex, pokemonList} : NavBarProps) {
        
        const handleClickNext = () => {
          setPokemonIndex((PokemonIndex) => (PokemonIndex + 1) % pokemonList.length);
        };
        const handleClickPrevious = () => {
        setPokemonIndex(
            (PokemonIndex) => (PokemonIndex - 1 + pokemonList.length) % pokemonList.length
        );
    };
    return (
        <>
         {PokemonIndex > 0 && (
            <button type="button" onClick={handleClickPrevious}>
              Précédent
            </button>)}
          {PokemonIndex < pokemonList.length - 1 && (
            <button type="button" onClick={handleClickNext}>
              Suivant
            </button>)}
        </>
          );
}

export default NavBar;