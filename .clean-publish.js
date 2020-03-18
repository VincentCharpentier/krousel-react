// CLEAN BEFORE PUBLISH
module.exports = {
  // Fields in package.json to remove
  fields: ['scripts', 'devDependencies'],
  // Files to remove
  files: [
    '.idea',
    'docs',
    'examples',
    'src',
    '.babelrc.js',
    '.clean-publish.js',
    '.gitignore',
    '.npmrc',
    '.prettierrc',
    '_config.yml',
    'README.md',
    'rollup.config.js',
  ],
  packageManager: 'npm',
};
