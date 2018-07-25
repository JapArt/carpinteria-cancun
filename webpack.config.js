const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "static"),
    filename: "bundle.js",
    publicPath: "/static"
  },
  watch: true,
  module: {
    rules: [{
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}