const result = await Bun.build({
  minify: true,
  target: 'bun',
  format: 'esm',
  splitting: true,
  outdir: './build',
  entrypoints: ['./bot.ts'],
})

if (!result.success) {
  console.error('Build failed')

  for (const message of result.logs) {
    console.error(message)
  }
}
