const loose = true;

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [['@babel/plugin-proposal-class-properties', { loose }]].filter(
    Boolean,
  ),
};

