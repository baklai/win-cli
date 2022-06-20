import theme from '@nuxt/content-theme-docs';

export default theme({
  telemetry: false,
  ssr: false,

  cli: {
    badgeMessages: [
      `Application: ${process.env.npm_package_name.toUpperCase()}`,
      `Version:     ${process.env.npm_package_version}`
    ],
    bannerColor: 'green'
  },

  head: {
    titleTemplate: '%s • Windows command line interpreter',
    title: 'CLI Windows',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Windows command line interpreter'
      },
      { name: 'google', content: 'notranslate' },
      {
        name: 'google-site-verification',
        content: 'bW4Hh2lyNwtDysU1Ty1WjKUx3vkISluriUOI_SapisE'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  buildModules: ['@nuxtjs/google-analytics', '@nuxtjs/pwa'],

  i18n: {
    locales: () => [
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.js',
        name: 'Русский'
      }
    ],
    defaultLocale: 'ru'
  },

  pwa: {
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      favicon: true,
      name: 'CLI Windows',
      author: 'Dmitrii Baklai',
      description: 'Windows command line interpreter',
      theme_color: '#ffffff',
      lang: 'ru',
      ogType: 'website',
      ogHost: 'win-cli.netlify.app',
      ogImage: {
        path: '/icon.png',
        width: '50',
        height: '50',
        type: 'image/png'
      },
      ogUrl: 'https://win-cli.netlify.app',
      twitterCard: 'summary_card',
      twitterSite: 'https://win-cli.netlify.app',
      twitterCreator: 'Dmitrii Baklai',
      nativeUI: true
    },
    manifest: {
      name: 'CLI Windows',
      short_name: 'CLI Windows',
      description: 'Windows command line interpreter',
      lang: 'ru',
      display: 'standalone',
      background_color: '#ffffff',
      start_url: '/?standalone=true',
      useWebmanifestExtension: false,
      orientation: 'portrait'
    }
  },

  googleAnalytics: {
    id: 'G-EKN6ETK7QD'
  },

  docs: {
    primaryColor: '#00A2E9'
  },

  content: {
    liveEdit: true
  },

  build: {
    publicPath: 'app/'
  }
});
