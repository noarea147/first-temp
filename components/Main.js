import React from "react";

export default function Main(props) {
  return (
    <main
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
      {props.children}
    </main>
  );
}
