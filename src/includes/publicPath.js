const
assetPath = process.env.NODE_ENV=='production'
  ? '/wp-content/themes/ws-ui/dist/'
  : '/'
__webpack_public_path__ = window.location.origin + assetPath