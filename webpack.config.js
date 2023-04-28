import path from "path";

export default {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "index.js",
    library: {
      type: "commonjs2",
    },
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
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
  externals: /^[a-z\-0-9]+$/, // Exclude node_modules from the bundle
};
