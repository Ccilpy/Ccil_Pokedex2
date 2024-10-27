interface pokemon {
  name: "string";
  imgSrc?: "string";
}

function PokemonCard ({name, imgSrc} : pokemon) {
  return imgSrc ? (
    <figure>
      <img src={imgSrc} alt={name} />
      <figcaption> {name} </figcaption>
    </figure>
  ) : (
    <>
      <p>???</p>
      <figcaption> {name} </figcaption>
    </>
  );
}

export default PokemonCard;
