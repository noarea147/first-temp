import React from "react";

export default function Text(props) {
  const data = props.data;
  const title = data?.title;
  const content = data?.content;

  return (
    <div className="text-container">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
