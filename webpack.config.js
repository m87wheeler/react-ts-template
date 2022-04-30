const path = require("path");

const config = {
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
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = config;
