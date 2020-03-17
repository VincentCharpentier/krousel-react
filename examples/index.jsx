import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'krousel/dist/krousel.css';
import Krousel from '..';
import './theme.scss';
import styles from './common.scss';

import EXAMPLES from './examples';

const CustomArrow = React.forwardRef(({ children }, ref) => {
  const [count, setCount] = useState(0);
  return (
    <div
      ref={ref}
      onClick={() => setCount((c) => c + 1)}
      className={styles.customArrow}
    >
      {children}&nbsp;({count})
    </div>
  );
});

const makeChildren = (count) => {
  return new Array(count).fill(null).map((x, i) => {
    const color = Math.round((i / count) * 360);
    const style = { backgroundColor: `hsl(${color}, 60%, 60%)` };
    return (
      <div key={i.toString()}>
        <h3 style={style}>{i + 1}</h3>
      </div>
    );
  });
};

const App = () => (
  <div>
    {EXAMPLES.map(({ name, count, description, className, ...options }, i) => (
      <section key={i.toString()} className={className}>
        <h1>{name}</h1>
        {description && <p>{description}</p>}
        <pre>
          const options = {JSON.stringify(options, null, 2)}
          {'\n\n'}// ... {'\n\n'}
          {`<Krousel {...options}>`}
        </pre>
        <Krousel {...options}>{makeChildren(count)}</Krousel>
      </section>
    ))}
    <section>
      <h1>Custom Arrows Components</h1>
      <pre>
        {`<Krousel \n`}
        {`  prevArrow={<CustomPrevArrow/>} \n`}
        {`  nextArrow={<CustomNextArrow/>} \n`}
        {`>`}
      </pre>
      <div>
        <Krousel
          className={styles.customArrows}
          prevArrow={<CustomArrow>Prev</CustomArrow>}
          nextArrow={<CustomArrow>Next</CustomArrow>}
        >
          {makeChildren(5)}
        </Krousel>
      </div>
    </section>
    <section>
      <h1>Custom Dots Styles</h1>
      <pre>{`<Krousel>`}</pre>
      <p>You can customize with CSS:</p>
      <pre>
        {`.k-dots {
  /* container */
  width: fit-content;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
}
.k-dot {
  /* square dot */
  border-radius: 0; 
  background: red;
  opacity: .2;
}
.k-dot.k-current {
  /* current dot */
  opacity: 1;
}`}
      </pre>
      <div>
        <Krousel className={styles.customDots}>{makeChildren(5)}</Krousel>
      </div>
    </section>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app_root'));
