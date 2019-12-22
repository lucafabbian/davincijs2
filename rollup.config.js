import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import globImport from 'rollup-plugin-glob-import'// Resolve glob inside imports
import serve from 'rollup-plugin-serve'
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
  watch: { clearScreen: true },
	plugins: [
    // Risolve gli import da cartella
    globImport({format: 'default'}),
    // Compila i file svelte
		svelte({	dev: !production,		css: css => {	css.write('public/build/bundle.css') }}),
    // Risolve gli import globali
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),
    // Minifica i js
    production && terser(),       // Minify only on production
    // Apre un server alla porta :10001 + livereload
    !production && serve({         // Open browser on watch
      open: true,
      contentBase: '../',
      openPage: '/davincijs2/public/index.html',
      host: 'localhost',
      port: 10001,
    }),
    !production && livereload(),  // Livereload on watch
	],
};
