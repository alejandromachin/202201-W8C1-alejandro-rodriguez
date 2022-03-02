import { useRouter } from "next/router";

const ProjectSSG = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <>{router.isFallback ? <p>LOADING</p> : <h1>tittle</h1>}</>;
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: id } }],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(process.env.NEXT_PUBLIC_MYPOKEAPI + params.id);
  const project = response.json();
  return {
    props: {
      project,
    },
    revalida: 30,
  };
};

export default ProjectSSG;
