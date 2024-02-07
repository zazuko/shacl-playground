import { defineConfig } from 'vite'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  define: {
    global: 'window',
  },
  resolve: {
    alias: {
      stream: 'readable-stream',
      zlib: 'browserify-zlib',
      util: 'util',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
    include: ['@zazuko/shacl-playground'],
  },
  build: {
    commonjsOptions: {
      include: [/packages\/lib/, /node_modules/]
    },
    rollupOptions: {
      plugins: [
        rollupNodePolyFill(),
      ],
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '../../README.md',
          dest: '.'
        },
        {
          src: './CHANGELOG.md',
          dest: '.'
        }
      ]
    })
  ]
})
