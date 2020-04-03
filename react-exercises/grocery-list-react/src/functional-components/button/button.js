import React from "react";
import { randomAlphaNumeric } from "../../utilities";
import "./button.css";

const defaultProps = {
  id: randomAlphaNumeric(),
  color: "primary",
  type: "outline",
};

const Button = (props) => {
  const finalProps = {
    ...defaultProps,
    ...props,
  };

  return (
    <button
      id={finalProps.id}
      name={finalProps.id}
      onClick={finalProps.clickHandler}
      disabled={finalProps.disabled}
      color={finalProps.color}
      type={finalProps.type}
      style={finalProps.style}
    >
      {finalProps.value}
    </button>
  );
};

export default Button;
