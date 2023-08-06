import { defineConfig, loadEnv } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';

const ENV = loadEnv('', process.cwd());

const sideBarDefault = {
  text: 'Початок',
  items: [
    { text: 'Вступ', link: '/guide/' },
    { text: 'Приклади', link: '/examples/' },
    { text: 'Швидкий старт', link: '/guide/quick-start' }
  ]
};

export default withPwa(
  defineConfig({
    base: '/',
    srcDir: './src',

    appearance: true,
    cleanUrls: true,
    lastUpdated: true,

    sitemap: {
      hostname: ENV?.HOST_NAME,
      lastmodDateOnly: false
    },

    lang: 'uk-UA',
    title: 'WIN:\\CLI',
    titleTemplate: 'WIN:\\CLI • :title',
    description: 'Переможець терміналу',

    head: [
      ['meta', { property: 'og:title', content: 'WIN:\\CLI • Переможець терміналу' }],
      [
        'meta',
        {
          property: 'og:description',
          content: 'Керівництво з використання можливостей командного рядка Windows'
        }
      ],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      [
        'script',
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-DY9ZDGJ84E'
        }
      ],
      [
        'script',
        {},
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-DY9ZDGJ84E');"
      ]
    ],

    themeConfig: {
      logo: { src: '/img/logo.png', alt: 'WIN:\\CLI' },

      siteTitle: false,

      outline: 2,
      outlineTitle: 'На цій сторінці',

      nav: [
        { text: 'Документація', link: '/guide/' },
        { text: 'Приклади', link: '/examples/' }
      ],

      sidebar: {
        '/guide/': [
          sideBarDefault,
          {
            text: 'Документація',
            collapsed: false,
            items: [
              { text: 'Вимкнення та перезавантаження', link: '/guide/shutdown' },
              { text: 'Налаштування проксі-серверу', link: '/guide/netsh-winhttp' },
              { text: 'Управління користувачами', link: '/guide/net-user' }
            ]
          }
        ],
        '/examples/': [
          sideBarDefault,
          {
            text: 'Приклади',
            collapsed: true
          }
        ]
      },

      aside: true,

      editLink: {
        pattern: 'https://github.com/baklai/win-cli/edit/main/:path',
        text: 'Редагувати цю сторінку на GitHub'
      },

      lastUpdatedText: 'Останнє оновлення',

      lastUpdated: {
        text: 'Останнє оновлення',
        formatOptions: { dateStyle: 'short' }
      },

      docFooter: {
        prev: 'Попередня сторінка',
        next: 'Наступна сторінка'
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/baklai' },
        {
          icon: 'linkedin',
          link: 'https://www.linkedin.com/in/baklai/'
        },
        { icon: 'twitter', link: 'https://twitter.com/baklaiDi' },
        { icon: 'facebook', link: 'https://www.facebook.com/dmitrii.baklai' },
        { icon: 'instagram', link: 'https://www.instagram.com/baklai.di/' }
      ],

      footer: {
        message: 'Ліцензія <a href="https://github.com/baklai/win-cli/blob/main/LICENSE">MIT</a>',
        copyright: `Всі права збережено © 2022-${new Date().getFullYear()} <a href="https://github.com/baklai">Dmitrii Baklai</a>`
      },

      darkModeSwitchLabel: 'Зовнішній вигляд',

      sidebarMenuLabel: 'Меню',

      returnToTopLabel: 'Повернутися до початку',

      langMenuLabel: 'Змінити мову',

      search: {
        provider: 'local',
        options: {
          disableDetailedView: false,
          disableQueryPersistence: false,

          translations: {
            button: {
              buttonText: 'Пошук',
              buttonAriaLabel: 'Показати детальний список'
            },
            modal: {
              displayDetails: 'Показати детальний список',
              resetButtonTitle: 'Скинути пошук',
              backButtonTitle: 'Закрити пошук',
              noResultsText: 'Немає результатів для',

              footer: {
                selectText: 'вибрати',
                navigateText: 'для навігації',
                closeText: 'закрити'
              }
            }
          }
        }
      },

      i18nRouting: false,

      externalLinkIcon: false
    },

    srcExclude: ['**/README.md'],

    pwa: {
      outDir: '../.vitepress/dist',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'WIN:\\CLI • Переможець терміналу',
        short_name: 'WIN:\\CLI',
        description: 'Переможець терміналу',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }
  })
);
