import React from "react";

const Image = (props) => {
  console.log("Image: ", props);

  return (
    <div className="image-container">
      <img src={require(`images/${props.path}?trace`).trace} />
      <img src={require(`images/${props.path}?webp`)} />
      <style jsx>{`
        .image-container: {
          position: relative:
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
        }
    `}</style>
    </div>
  );
};

export default Image;
