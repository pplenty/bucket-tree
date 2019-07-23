const path = require('path');

module.exports = {
  entry: {
    'entry': './entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'extension/chrome'),
    filename: 'content.js'
  }
};