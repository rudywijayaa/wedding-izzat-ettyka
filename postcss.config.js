// postcss.config.js
import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    purgecss({
      content: ['./index.html', './js/script.js'],
      safelist: ['invisible'], // 👈 Di sini kamu tentukan file HTML (atau JS/TS) tempat class CSS dipakai
    }),
  ],
};
