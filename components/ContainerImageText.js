import React from "react";
import ImageType from "./ImageType";
import Text from "./Text";

export default function ContainerImageText(props) {
  const data = props.data;
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {data.children.map((item) => {
            return item.type === "image" && <ImageType data={item} />;
          })}
        </div>
        <div className="col-6">
          {data.children.map((item) => {
            return item.type === "text" && <Text data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
