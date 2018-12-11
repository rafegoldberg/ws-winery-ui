const
BASE = '/',
PROD = process.env.NODE_ENV === 'production'

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
      chunkFilename: '[name].js'
    },
    /* resolve: {
      alias: {}
    }, */
    module:{
      rules:[
        { resourceQuery: /blockType=docs/,
          loader:        require.resolve('./docs/src/.loader.js')
        },
      ]
    }
  },
  transpileDependencies: [
    'swiper',
    'vue-vimeo-player',
    // 'inflection',      // BREAKING
    // 'vue2-google-maps' // BREAKING
  ],

  css: {
    sourceMap: true,
    extract: false
  },
  
  lintOnSave: false
};