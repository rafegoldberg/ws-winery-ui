const
PRODENV = process.env.NODE_ENV === 'production',
BASEURL = PRODENV ? '/clients/ws3/' : '/'

module.exports = {

  baseUrl: BASEURL,

  configureWebpack: {
    devtool: "source-map",
    devServer: {
      host: "0.0.0.0"
    },
    output:{
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: PRODENV ? BASEURL+`wp-content/themes/ws-ui/dist/` : '/'
    },
    resolve: {
      alias: {}
    }
  },

  css: {
    sourceMap: true,
    extract: false
  },
  
  lintOnSave: false
};