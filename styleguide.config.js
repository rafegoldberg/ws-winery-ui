const
CONF = require("@vue/cli-service/webpack.config.js"),
path = require("path")

module.exports = {

  // webpackConfig: CONF,
  
  title: "WsUi",
  styleguideDir: './docs',

  require:[
    // path.join(__dirname,'src/includes/use/async.js'),
    // path.join(__dirname,'src/styles/external.scss'),
  ],
  sections: [
    { name: 'Williams Selyem',
      content: 'readme.md'
    },
  ],

  navigation: true,
  showCode: true,
  showUsage: false,
  defaultExample: false,
  editorConfig: {
    lineNumbers: true
  },

  /* template: {
      head: {
        links: [
          { href: '//fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700',
            rel:  'stylesheet'
          },
        ]
      }
    },
   */
  /* theme: {
      color: {
        link: '#079CB4',
        linkHover: '#079CB4'
      },
      fontFamily: {
        monospace: ['Source Code Pro','Menlo','monospace'],
      }
    },
   */
  /*
    styles: {
      Markdown: {
        heading: {
          fontFamily: ['Futura PT','Futura','sans-serif'],
          fontWeight: 'bold',
        }
      }
    }
   */
}