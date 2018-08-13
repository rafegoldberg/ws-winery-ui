const
PROD = process.env.NODE_ENV === 'production',
BASE = '/' // PROD ? '/clients/ws3/' : '/'

module.exports = {

  baseUrl: BASE,

  configureWebpack: {
    devtool: "source-map",
    devServer: {
      host: "0.0.0.0"
    },
    output:{
      filename: '[name].js',
      chunkFilename: '[name].js',
      // publicPath: PROD ? BASE+'wp-content/themes/ws-ui/dist/' : '/'
    },
    resolve: {
      alias: {}
    },
    module:{
      rules:[
      { resourceQuery: /blockType=docs/,
        loader:        require.resolve('./docs/src/.loader.js')
        },
    ]}
  },

  css: {
    sourceMap: true,
    extract: false
  },
  
  lintOnSave: false
};