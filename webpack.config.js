const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const No2WebpackPlugin = require("./plugins/NO2-webpack-plugin");
// const fileListPlugin = require("./plugins/frist-list-plugin");
const WatcherPlugin = require("./plugins/watch-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "custom-plugin",
    }),
    new CleanWebpackPlugin(),
    // new No2WebpackPlugin({ msg: "good boy" }),
    // new fileListPlugin(),
    new WatcherPlugin(),
  ],
};
