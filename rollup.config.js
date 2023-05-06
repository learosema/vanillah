import terser from '@rollup/plugin-terser';

export default {
  input: 'vanillah.js',
  output: [
    {
      file: 'dist/vanillah.js',
      format: 'es',
    },
    {
      file: 'dist/vanillah.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/vanillah.umd.js',
      format: 'umd',
      name: 'vanillaH',
    },
  ],
  plugins: [terser()],
};