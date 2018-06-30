const
ENV = process.env.NODE_ENV === 'production',
URI = ENV ? '/clients/ws3/' : '/'

module.exports = {

  baseUrl: URI,

  configureWebpack: {
    devtool: "source-map",
    devServer: {
      host: "0.0.0.0"
    },
    output:{
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: ENV ? '/wp-content/themes/ws-ui/dist/' : '/'
    },
    resolve: {
      alias: {}
    },
    module:{rules:[
      { resourceQuery: /blockType=docs/,
        loader:        require.resolve('./docs/src/.loader.js')  },
    ]}
  },

  css: {
    sourceMap: true,
    extract: false
  },
  
  lintOnSave: false
};