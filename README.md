# krousel-react

React wrapper for [krousel](https://github.com/VincentCharpentier/krousel/) - a javascript carousel library

## Installation

```bash
npm install --save krousel krousel-react
```

## Features

- Infinite loop
- Change transition speed & type (slide / fade)
- Autoplay & autoplay speed
- Enable / Disable arrows
- Enable / Disable navigation dots
- Show multiple slides at once
- Slide multiple slides at once
- Responsive: change config using breakpoints
- Change where dots and/or arrows will be inserted
- Use custom arrows

## Options

Pass options as properties to Krousel

```jsx
import 'krousel/dist/krousel.css';
import Krousel from 'krousel-react';

// render
<Krousel infinite={true} slidesToShow={2}>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
  <div>Slide 4</div>
  <div>Slide 5</div>
</Krousel>
```

You can find the list of options [here](https://github.com/VincentCharpentier/krousel#options)