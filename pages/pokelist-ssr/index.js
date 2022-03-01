const PokemonsSSR = ({ pokemonsAPI }) => {
  return (
    <>
      <h1>POKÉMONS EN CSR</h1>
      {pokemonsAPI.results.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_POKEAPI);
  const pokemonsAPI = await response.json();

  return {
    props: { pokemonsAPI },
  };
};

export default PokemonsSSR;
