const
path = require("path")

module.exports = {
  
  title: "Williams Selyem",
  styleguideDir: './docs',

  require:[
    path.join(__dirname,'src/VuePress/WP.js'),
    path.join(__dirname,'src/includes/use/log.js'),
    path.join(__dirname,'src/includes/use/async.js'),

    path.join(__dirname,'src/styles/main.scss'),
    path.join(__dirname,'src/styles/extend/themes.scss'),
    
    path.join(__dirname,'src/styles/docs.scss'),
  ],
  
  sections: [
    { name: "Introduction",
      content: 'readme.md'
      },
    { name: "Components",
      description: 'The building blocks of the WS user interface.',
      components: 'src/components/UI/**/*.vue',
      },
    { name: "Complications",
      description: 'Combinations of components and common brand-specific patterns.',
      components: 'src/components/modules/**/*.vue',
      },
    { name:"Icons",
      components: 'src/components/icons/*.vue'
      },
    // { name: "Pages",
    //   description: 'Discreet sections of the WS application flow.',
    //   components: 'src/views/**/*.vue',
    //   },
  ],

  navigation: true,
  showCode: true,
  showUsage: false,
  defaultExample: false,
  editorConfig: {
    lineNumbers: true
  },

  theme: {
    color: {
      link: '#BA9454',
      linkHover: 'salmon'
    },
    fontFamily: {
      base: '"Butler", Georgia, serif'
    }
  },

}