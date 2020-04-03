import React from 'react';
import { randomAlphaNumeric } from '../utilities';

const defaultProps = {
  id: randomAlphaNumeric()
}

const Button = (props) => {
  const finalProps = {
    ...defaultProps,
    ...props
  };

  return (
    <button
      id={finalProps.id}
      name={finalProps.id}
      onClick={finalProps.clickHandler}
      disabled={finalProps.disabled}>
      {finalProps.value}
    </button>
  );
}

export {
  Button
};
