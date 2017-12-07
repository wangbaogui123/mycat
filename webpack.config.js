const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: ['less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/, 
        use: 'url-loader?limit=4192&name=[name].[ext]' 
      },

      {
        test: /\.html$/, 
        use: ['html-loader'] 
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'] 
      }

    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true
  },
  plugins:[
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        })
    ]
}

module.exports = config;