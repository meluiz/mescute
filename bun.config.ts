export default await Bun.build({
  minify: true,
  target: 'bun',
  format: 'esm',
  splitting: true,
  outdir: './build',
  entrypoints: ['./bot.ts'],
})
