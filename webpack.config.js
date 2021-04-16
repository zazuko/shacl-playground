/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const { merge } = require("webpack-merge");
const { createDefaultConfig } = require("@open-wc/building-webpack");

module.exports = merge(
  createDefaultConfig({
    input: path.resolve(__dirname, "./src/index.html")
  }),
  {
    resolve: {
      extensions: [".mjs", ".js", ".json"],
      alias: {
        stream: "readable-stream"
      }
    },
    module: {
      rules: [
        {
          test: /\.jsonld$/,
          use: ["raw-loader"]
        },
        {
          test: /\.ttl$/,
          use: ["raw-loader"]
        }
      ]
    },
    node: {
      crypto: true
    }
  }
);
