import Image from "next/image";
import { PokemonCard, PokemonList } from "../list-csr";

const PokemonsSSR = ({ pokemonsAPI }) => {
  return (
    <>
      <h1>POKÉMONS EN CSR</h1>

      <PokemonList>
        {pokemonsAPI &&
          pokemonsAPI.map((pokemon) => (
            <PokemonCard key={pokemon.id}>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width="200"
                height="100"
              />
              <p>{pokemon.name}</p>
            </PokemonCard>
          ))}
      </PokemonList>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_MYPOKEAPI);
  const pokemonsAPI = await response.json();

  return {
    props: { pokemonsAPI },
  };
};

export default PokemonsSSR;
