import React from "react";
import { randomAlphaNumeric } from "../../utilities";
import "./input.css";

const defaultProps = {
  id: randomAlphaNumeric(),
};

const Input = (props) => {
  const finalProps = {
    ...defaultProps,
    ...props,
  };

  const keyupHandler = (keyEvent) => {
    if (finalProps.changeHandler) {
      finalProps.changeHandler(keyEvent);
    }

    if (keyEvent.keyCode === 13) {
      finalProps.enterHanlder(keyEvent);
    }
  };

  return (
    <input
      type="text"
      value={finalProps.value}
      id={finalProps.id}
      name={finalProps.id}
      onChange={finalProps.changeHandler ? finalProps.changeHandler : null}
      onKeyUp={keyupHandler}
      style={finalProps.style}
    />
  );
};

export { Input };
