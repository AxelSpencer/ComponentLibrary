import React from "react";
import Box from "./Box";
import Text from "./Text";
import Button from "./Button";

const MyAwesomeComponent = () => {
  const handleClick = () => {
    alert("This is an alert");
  };

  return (
    <Box size="medium" bgColor="#f5f5f5">
      <Text size="medium" color="#333">
        Click this {">"}
      </Text>
      <Button color="#f00" onClick={handleClick}>
        Click me
      </Button>
    </Box>
  );
};

export default MyAwesomeComponent;