import React from "react";

export default function Main(props) {
  return (
    <main
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
      <center>
        <h1 style={{ color: props.colors.titleColor }}>{props.title}</h1>
      </center>
      <center>
        <p style={{ color: props.colors.bodyColor }}>Get started by editing</p>
      </center>
    </main>
  );
}
