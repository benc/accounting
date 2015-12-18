module.exports = {
  entry: {
    'vendor': './src/vendor.ts',
    'app': './src/bootstrap.ts'
  },
  output: {
    path: __dirname + "/dist", 
    publicPath: 'dist/', 
    filename: '[name].js'
  },
  resolve: {
    extensions: ['','.ts','.js','.json', '.css', '.html']
  },
  module: {
    loaders: [
      { test: /\.html$/,  loader: 'raw-loader' },
      { test: /\.css$/,   loader: 'raw-loader' },
      { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  },
  devServer: {
    historyApiFallback: true,
    port: 9000
  }
};
