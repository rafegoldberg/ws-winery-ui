const
path = require("path")

module.exports = {
  
  title: "WsUi",
  styleguideDir: './docs',

  require:[
    path.join(__dirname,'src/VuePress/WP'),
    path.join(__dirname,'src/includes/use/log'),
    path.join(__dirname,'src/includes/use/async'),
    path.join(__dirname,'src/styles/main.scss'),
    path.join(__dirname,'src/styles/extend/themes.scss'),
  ],
  sections: [
    { name: 'Williams Selyem',
      content: 'readme.md'
      },
    { name: 'Components',
      description: 'The building blocks of the WS user interface.',
      components: 'src/components/UI/**/*.vue',
      },
  ],

  navigation: true,
  showCode: true,
  showUsage: false,
  defaultExample: false,
  editorConfig: {
    lineNumbers: true
  },

}