import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/home">HOME</Link>
        </li>
        <li>
          <Link href="/list-csr">POKEMONS</Link>
        </li>
        <li>
          <Link href="/list-ssr">MIS POKÉMONS SSR</Link>
        </li>
        <li>
          <Link href="/list-ssg">MIS POKÉMONS SSG</Link>
        </li>
        <li>
          <Link href="/list-isr">MIS POKÉMONS ISR</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
