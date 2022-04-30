const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: path.join(__dirname, "./", "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3001,
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
      template: path.join(__dirname, "./", "public", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};

module.exports = config;
