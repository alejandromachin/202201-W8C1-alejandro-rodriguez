const PageCSR = () => {
  return (
    <>
      <h1>POKÉMONS EN CSR</h1>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(process.env.API.URL);
  const projectsAPI = await response.json();

  return {
    props: {
      projects: projectsAPI,
    },
    revalidate: 60,
  };
};

export default PageCSR;
