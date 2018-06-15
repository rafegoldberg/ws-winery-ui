module.exports = {
  configureWebpack: {
    devtool: "source-map",
    devServer: {
      host: "0.0.0.0"
    },
    resolve: {
      alias: {}
    }
  },

  css: {
    extract: false
  },
  lintOnSave: false
};
