import React from "react";

export default function ImageType(props) {
  const data = props.data;
  const url = data?.url;
  const alt = data?.alt;
  const className = props?.className;

  return <img src={url} alt={alt} className={className} />;
}
