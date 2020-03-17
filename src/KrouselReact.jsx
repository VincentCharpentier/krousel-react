import React from 'react';
import Krousel from 'krousel';
import Arrow from './Arrow';
const { useState, useEffect, useRef } = React;

const KrouselReact = (props) => {
  const { className, children, style, ...options } = props;
  const target = useRef(null);
  const prevArrow = useRef(null);
  const nextArrow = useRef(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!init) {
      // trigger re-render with ref set
      setInit(true);
    } else {
      // init on mount
      let finalOptions = Object.assign(
        {
          _forceAppendPrevArrow: React.isValidElement(options.prevArrow),
          _forceAppendNextArrow: React.isValidElement(options.nextArrow),
        },
        options,
        {
          prevArrow: prevArrow.current,
          nextArrow: nextArrow.current,
        },
      );
      new Krousel(target.current, finalOptions);
    }
  }, [init]);

  const targetProps = {
    ref: target,
    className,
    style,
  };

  return (
    <>
      <Arrow ref={prevArrow} arrow={options.prevArrow} />
      <div {...targetProps}>{children}</div>
      <Arrow ref={nextArrow} arrow={options.nextArrow} />
    </>
  );
};

export default KrouselReact;
