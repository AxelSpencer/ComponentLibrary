import React from "react";

const Box = ({ size = "medium", bgColor = "#ccc", children }) => {
  const sizes = {
    small: "100px",
    medium: "200px",
    large: "300px"
  };

  return (
    <div
      style={{
        width: sizes[size],
        height: sizes[size],
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  );
};

export default Box;
