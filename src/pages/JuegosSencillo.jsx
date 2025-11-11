import { useState, useEffect } from "react";

function JuegosSencillo() {
  const [pokemons, setPokemons] = useState([]); useState([])// → crea una variable viva pokemons que guarda la lista.
  const [detalle, setDetalle] = useState(null);
// useEffect(() => {...}, []) → se ejecuta solo una vez al montar el componente.
  useEffect(() => {   
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results)) // guarda los nombres de los pokémon.
//→ recorre el array y los muestra en una lista.
      .catch(console.error);  //“Si algo sale mal en cualquiera de los .then(), ejecutá esto otro.” Si hubo algún problema (por ejemplo: no hay conexión, la API está caída, o escribiste mal la URL),
  }, []);
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
          {pokemons.map((p, i)=>(  <li key={i}>{p.name}</li>))}
      </ul>
    </>
  )
}

export default JuegosSencillo;
