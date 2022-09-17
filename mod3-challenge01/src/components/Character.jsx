const Character = ( {character, selectedChar} ) => {
  return (
    <div onClick={() => selectedChar(character)} className="color-square">
      <img src={character.image}/>
      <p>{character.name}</p>
      <p>{character.status}</p>
      <p>{character.species}</p>
    </div>
  );
}

export default Character;