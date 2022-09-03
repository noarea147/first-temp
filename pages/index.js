import Main from "../components/main";

export default function Home({ data }) {
  const colors = {
    titleColor: "red",
    bodyColor: "white",
  };
  const backgroundColor = "#000";

  return (
      <Main
        title={data?.data?.name}
        content={data?.data?.content}
        colors={colors}
        backgroundColor={backgroundColor}
      />
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:8000/builder/get", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: process.env.WEBSITE_ID }),
  });
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
