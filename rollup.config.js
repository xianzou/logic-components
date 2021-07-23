import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export default {
    input: "./src/index.js",
    output: [
      {
        file: './dist/index-es.js',
        format: 'es'
      },
      {
        file: './dist/index-cjs.js',
        format: 'cjs'
      }
    ],
    plugins:[
        postcss({
          extensions: [ '.css' ],
          plugins:[
            autoprefixer()  
          ]
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        commonjs(),
        terser(),
      ],
      external:[
          'react'
      ]
  }