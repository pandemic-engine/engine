const path = require('path')

module.exports = {
  mode: 'development',
  entry: './public/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // use: 'ts-loader',
        use: [{
          loader: 'ts-loader',
          options: {
            onlyCompileBundledFiles: true
          }
        }],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
