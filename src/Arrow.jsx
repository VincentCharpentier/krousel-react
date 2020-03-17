import React from 'react';

const Arrow = React.forwardRef(({ arrow }, ref) => {
  let result;
  if (arrow && React.isValidElement(arrow)) {
    result = React.cloneElement(arrow, {
      ...arrow.props,
      ref,
    });
  } else {
    result = arrow;
  }
  return result;
});

export default Arrow;
