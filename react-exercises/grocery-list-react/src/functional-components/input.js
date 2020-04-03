import React from 'react';
import { randomAlphaNumeric } from '../utilities';

const defaultProps = {
  id: randomAlphaNumeric()
}

const Input = (props) => {
  const finalProps = {
    ...defaultProps,
    ...props
  };

  return (
    <input type="text"
      value={finalProps.value}
      id={finalProps.id}
      name={finalProps.id}
      onChange={finalProps.changeHandler ? finalProps.changeHandler : null}
      onKeyUp={finalProps.changeHandler ? finalProps.changeHandler : null} />
  );
}

export {
  Input
}