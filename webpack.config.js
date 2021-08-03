const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // { test: /\.woff(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      // { test: /\.woff2(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      // { test: /\.ttf(\?.+)?$/, use: 'file-loader' },
      // { test: /\.eot(\?.+)?$/, use: 'file-loader' },
      // { test: /\.svg(\?.+)?$/, use: 'file-loader' },
      // { test: /\.png$/, use: 'url-loader?mimetype=image/png' },
      // { test: /\.gif$/, use: 'url-loader?mimetype=image/gif' },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      },
      {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
        ],
      }
    ],
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};