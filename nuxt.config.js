const pkg = require('./package')

module.exports = {
  mode: 'universal',
  modern: 'client',

  /*
   ** Headers of the page
   */
  head: {
    title: "Hello world",
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'version',
        name: 'version',
        content: pkg.version
      },
      {
        hid: 'author',
        name: 'author',
        content: pkg.author
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/styles/font', '~/assets/styles/bulma'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    'nuxt-fontawesome',
    '@nuxtjs/markdownit'
  ],

  'google-analytics': {
    id: ''
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true
  },

  fontawesome: {
    component: 'fa',
    imports: [
      //import whole set
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
        // icons: ['faArrowCircleLeft', 'faChevronUp']
      }
//       {
//         set: '@fortawesome/free-regular-svg-icons',
//         icons: ['far']
//       },
//       {
//         set: '@fortawesome/free-brands-svg-icons',
//         icons: ['fab']
//       }
    ]
  },

  generate: {
    subFolders: false,
    fallback: '404.html',
    routes: ['404']
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, loaders }) {
      if (isDev) loaders.cssModules.localIdentName = '_[name]_[local]'
      else
        loaders.cssModules.localIdentName =
          '[name]-[sha512:contenthash:base64:4]-[sha512:contenthash:hex:4]-[sha256:contenthash:base64:4]-[sha256:contenthash:hex:4]'

      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
