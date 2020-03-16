import React from 'react';
import ReactDOM from 'react-dom';
import 'krousel/dist/krousel.css';
import Krousel from '..';
import './common.scss';
import './theme.scss';

import EXAMPLES from './examples';

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
  </div>
);

ReactDOM.render(<App />, document.getElementById('app_root'));
