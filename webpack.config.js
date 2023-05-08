import path from "path";
import { fileURLToPath } from "url";

const currentModulePath = fileURLToPath(import.meta.url);

export default {
  entry: "./src/index.ts",
  mode: "production",
  output: {
    path: path.resolve(path.dirname(currentModulePath), "dist"),
    filename: "index.js",
    library: {
      type: "module",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    extensionAlias: {
      ".js": [".ts", ".js"],
      ".cjs": [".cts", ".cjs"],
      ".mjs": [".mts", ".mjs"],
    },
  },
  experiments: {
    outputModule: true, // Enable the output module experiment
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: "json-loader",
        type: "javascript/auto",
      },
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json",
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
