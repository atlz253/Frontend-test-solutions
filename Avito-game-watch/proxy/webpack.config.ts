import path from "path";
import webpack from "webpack";
import NodemonPlugin from "nodemon-webpack-plugin";

const config: webpack.Configuration = {
  mode: "production",
  target: "node",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [new NodemonPlugin()],
};

export default config;
