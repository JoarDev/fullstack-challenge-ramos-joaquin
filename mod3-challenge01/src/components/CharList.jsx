import { useEffect, useState } from "react";
import { getCharacters } from "../services";
import Character from "./Character";

const ColorList = () => {

  const [charList, setCharList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [charSelected, setCharSelected] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => {
        setCharList(data.results)
        console.log(charList)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <h1>Loading</h1>}
      <img src={charSelected.image} alt="Seleccione una imagen" />
      <div>
        {
         charList.map( character => 
          <Character character={character} selectedChar={setCharSelected}/>
           )
        }
      </div>
    </>
  );
}

export default ColorList;