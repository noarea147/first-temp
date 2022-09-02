import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "../components/main";

export default function Home() {
  const title = "my dynamic title";
  const colors = {
    titleColor: "red",
    bodyColor: "white",
  };
  const backgroundColor = "#000";
  return (
      <Main title={title} colors={colors} backgroundColor={backgroundColor} />
  );
}
