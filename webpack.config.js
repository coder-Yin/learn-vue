var webpack = require('webpack')

module.exports = {
  // entry: './src/app.js',
  // output: {
  //   path: './dist', //文件夹生成的目录
  //   publicPath: '../dist/', //静态文件（图片）的路径
  //   filename: 'app.js'
  // },
  entry: {
    app:['./src/app.js'],
    blog_index:['./src/blog_index.js'],
    works:['./src/works.js']
  },
  output: {
    path: './dist', //文件夹生成的目录
    publicPath: '../dist/', //静态文件（图片）的路径
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file?name=[name].[ext]?[hash]'
      }
    ]
  },
  // example: if you wish to apply custom babel options
  // instead of using vue-loader's default:
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}