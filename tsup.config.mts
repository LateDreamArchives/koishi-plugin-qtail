import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/main.ts'],
	format: 'cjs',
	platform: 'node',
	bundle: true,
	dts: true,
	minify: true
});
