require('esbuild')
  .build({
    entryPoints: ['server.ts'],
    bundle: true,
    platform: 'node',
    external: ['dotenv'],
    outfile: 'dist/index.js',
    watch: process.env.NODE_ENV === 'development',
  })
  .catch(() => process.exit(1))
