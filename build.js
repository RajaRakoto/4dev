import dts from 'bun-plugin-dts';

// build process
await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
  splitting: false,
  sourcemap: 'external',
  target: 'bun', // or 'node', 'browser'
  plugins: [dts()],
}).catch(console.error)

// shebang process
async function shebangProcess(filePath, shebang) {
  const originalContent = await Bun.file(filePath).text();
  const contentWithShebang = `${shebang}\n${originalContent}`;
  await Bun.write(filePath, contentWithShebang);
}

// shebangProcess('./dist/index.js', '#!/usr/bin/env node');
