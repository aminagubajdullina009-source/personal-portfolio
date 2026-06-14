const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('autoprefixer'),
    purgecss({
      content: ['./src/index.html'],
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};