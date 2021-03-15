

module.exports = {
  mode: "development",
  entry: './src/index.js', //maybe main.js?
  output: {
    path: __dirname + '/public',//where it will go?
    filename: 'bundle.js'
  }
}
