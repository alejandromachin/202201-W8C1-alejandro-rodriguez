import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PokemonCard = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  height: 200px;
  align-items: center;
  background-image: url(https://lh3.googleusercontent.com/Bz9708ZAzDnCTokSd0Klsw8ZgGbUu6WsTyQnCaELSolP-MOBaKYTXvdFSr9lmCqmjb53XGclD7RZI0DksDLw=s500);
  border: 3px solid black;
  gap: 20px;
  color: #fff;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  list-style-type: none;
  box-shadow: 2px 2px 31px 6px rgba(0, 0, 0, 0.48);
`;

const PokemonList = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
`;
const PokemonsCSR = () => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_POKEAPI);
      const pokemons = await response.json();
      const pokemonsAllpromise = Promise.all(
        pokemons.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        )
      );
      const pokemonsTodo = await pokemonsAllpromise;
      setPokemons(pokemonsTodo);
    })();
  }, []);

  return (
    <>
      <h1>POKÉMONS EN CSR</h1>
      <PokemonList>
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id}>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.forms.name}
                width="200"
                height="100"
              />
              <p>{pokemon.forms[0].name}</p>
            </PokemonCard>
          ))}
      </PokemonList>
    </>
  );
};
export default PokemonsCSR;
