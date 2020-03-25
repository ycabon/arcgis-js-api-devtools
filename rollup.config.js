import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const tsconfig = {
  target: 'ES2017',
};

export default [
  {
    input: './src/main.ts',
    plugins: [typescript(tsconfig), terser()],
    output: {
      file: 'dist/arcgis-js-api-devtools.js',
      format: 'cjs',
    },
  },
  {
    input: './src/main.ts',
    plugins: [
      typescript(tsconfig),
      terser({
        module: true,
      }),
    ],
    output: {
      file: 'dist/arcgis-js-api-devtools.esm.js',
      format: 'es',
    },
  },
];
