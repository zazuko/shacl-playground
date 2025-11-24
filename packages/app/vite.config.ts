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
    dedupe: [
      '@vaadin/component-base',
      '@vaadin/vaadin-lumo-styles',
      '@vaadin/vaadin-themable-mixin',
    ],
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
    include: [
      '@zazuko/shacl-playground',
      '@vaadin/button',
      '@vaadin/icon',
      '@vaadin/icons',
      '@vaadin/dialog',
      '@vaadin/app-layout',
      '@vaadin/tabs',
      '@vaadin/vertical-layout',
      '@vaadin/split-layout',
      '@vaadin/form-layout',
      '@vaadin/text-field',
      '@vaadin/select',
      '@vaadin/list-box',
      '@vaadin/item',
      '@vaadin/custom-field',
    ],
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
