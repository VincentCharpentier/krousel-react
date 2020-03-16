import styles from './examples.scss';

const EXAMPLES = [
  {
    name: 'Simple demo',
    count: 5,
    infinite: false,
  },
  {
    name: 'Infinite loop (default)',
    count: 5,
    infinite: true,
  },
  {
    name: 'Transition speed',
    count: 5,
    speed: 1000,
    className: styles.slow,
  },
  {
    name: 'Transition Type',
    count: 5,
    transition: 'fade',
  },
  {
    name: 'Autoplay (pause when hovered)',
    count: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    infinite: true,
  },
  {
    name: 'Disable arrows',
    count: 5,
    arrows: false,
    autoplay: true,
  },
  {
    name: 'Show multiple',
    count: 5,
    slidesToShow: 2,
  },
  {
    name: 'Scroll multiple',
    count: 5,
    slidesToShow: 2,
    slidesToScroll: 2,
  },
  {
    name: 'Scroll multiple',
    count: 25,
    slidesToShow: 4,
    slidesToScroll: 3,
  },
  {
    name: 'Hide dots',
    count: 5,
    dots: false,
  },
  {
    name: 'Responsive',
    count: 10,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
];

export default EXAMPLES;
