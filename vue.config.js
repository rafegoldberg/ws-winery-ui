const
BASE = '/',
PROD = process.env.NODE_ENV === 'production',
path = require('path')

module.exports = {

  baseUrl: BASE,
  assetsDir: PROD ? './wp-content/themes/ws-ui/dist/' : '.',


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
      ]
    }
  },
  transpileDependencies: [
    'inflection',
    'swiper',
    'vue-vimeo-player',
    // 'vue2-google-maps' // BREAKING
  ],

  css: {
    sourceMap: true,
    extract: false
  },
  
  lintOnSave: false
};