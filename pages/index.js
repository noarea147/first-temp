import Head from "next/head";
import ContainerImageText from "../components/ContainerImageText";
import ContainerTextImage from "../components/ContainerTextImage";
import template from "../data/template.json";

export default function Home() {
  function renderComponent(template) {
    return <ContainerTextImage data={template} />;
  }

  const getComponent = (template) => {
    const value = template.type;
    switch (value) {
      case "ContainerImageText":
        return <ContainerImageText data={template} />;
      case "ContainerTextImage":
        return <ContainerTextImage data={template} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Head>
        <title>Hello, Alaa!</title>
      </Head>
      <div>
        {template.map((components) => {
          return getComponent(components);
        })}
      </div>
    </div>
  );
}
