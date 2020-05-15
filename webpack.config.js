const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8081,
  },
  plugins: [
      new DashboardPlugin(),
      new MiniCssExtractPlugin({
        filename: 'style.css',
        chunkFilename: 'chunk.css',
      }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
