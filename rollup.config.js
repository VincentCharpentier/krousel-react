import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { uglify } from 'rollup-plugin-uglify';
import replace from '@rollup/plugin-replace';
import pkg from './package.json';

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id) => pattern.test(id);
};

const minify = process.env.MINIFY;
const format = process.env.FORMAT;
const es = format === 'es';
const umd = format === 'umd';
const cjs = format === 'cjs';

let output;

if (es) {
  output = { file: `dist/krousel-react.es.js`, format: 'es' };
} else if (umd) {
  if (minify) {
    output = {
      file: `dist/krousel-react.umd.min.js`,
      format: 'umd',
    };
  } else {
    output = { file: `dist/krousel-react.umd.js`, format: 'umd' };
  }
} else if (cjs) {
  output = { file: `dist/krousel-react.cjs.js`, format: 'cjs' };
} else if (format) {
  throw new Error(`invalid format specified: "${format}".`);
} else {
  throw new Error('no format specified. --environment FORMAT:xxx');
}

export default {
  input: 'src/index.js',
  output: Object.assign(
    {
      name: 'krousel-react',
      exports: 'named',
      globals: {
        react: 'React',
        krousel: 'Krousel',
      },
    },
    output,
  ),
  external: makeExternalPredicate(
    umd
      ? Object.keys(pkg.peerDependencies || {})
      : [
          ...Object.keys(pkg.dependencies || {}),
          ...Object.keys(pkg.peerDependencies || {}),
        ],
  ),
  plugins: [
    resolve({ extensions: ['.js', '.jsx'], mainFields: ['jsnext:main'] }),
    json(),
    commonjs({ include: 'node_modules/**' }),
    babel({
      exclude: 'node_modules/**',
      plugins: [['@babel/plugin-transform-runtime', { useESModules: !cjs }]],
      runtimeHelpers: true,
    }),
    umd
      ? replace({
          'process.env.NODE_ENV': JSON.stringify(
            minify ? 'production' : 'development',
          ),
        })
      : null,
    minify ? uglify() : null,
  ].filter(Boolean),
};
