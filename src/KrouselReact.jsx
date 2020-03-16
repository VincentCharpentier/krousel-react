import React from 'react';
import Krousel from 'krousel';
const { useEffect, useRef } = React;

const KrouselReact = (props) => {
  const { className, children, style, ...options } = props;
  const target = useRef(null);

  useEffect(() => {
    // init on mount
    new Krousel(target.current, options);
  }, []);

  return <div ref={target}>{children}</div>;
};

export default KrouselReact;
