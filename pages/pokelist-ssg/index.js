import Image from "next/image";
import Link from "next/link";
import { Center } from "..";
import { PokemonCard, PokemonList } from "../list-csr";

const PokemonsSSG = ({ pokemonsAPI }) => {
  return (
    <>
      <Center>
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
                <Link href={`/pokemonssg/${pokemon.id}`}>+INFO</Link>

                <p>{pokemon.name}</p>
              </PokemonCard>
            ))}
        </PokemonList>
      </Center>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_MYPOKEAPI);
  const pokemonsAPI = await response.json();

  return {
    props: { pokemonsAPI },
  };
};

export default PokemonsSSG;
