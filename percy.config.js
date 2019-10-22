export default {
  webpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    }
  }
};
