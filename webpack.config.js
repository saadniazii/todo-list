const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[id].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devtool: "inline-source-map",

  devServer: {
    static: "./dist",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo List",
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  optimization: {
    runtimeChunk: "single",
  },
};
