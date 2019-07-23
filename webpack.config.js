const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    'content': './entry.js',
  },

  // devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'extension/chrome'),
    filename: '[name].js'
  },

  optimization: {
    minimize: false
  },

  module: {
    rules: [{
      test: /\.css$/,
      loader: 'css-loader',
      options: {
        modules: true
      },
      include: [
        path.resolve(__dirname, 'src'),
      ]
    }]
  },

  plugins: [
    new CopyPlugin([
      {
        from: './src/config/manifest.json',
        transform(content) {
          return content.toString().replace('$VERSION', getVersion());
        },
      },
      {
        from: './src/config/background.js',
      },
    ]),
  ],
};

function getVersion() {
  return require('./package.json').version;
}