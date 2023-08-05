import { defineConfig } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';

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

    appearance: true,
    cleanUrls: true,
    lastUpdated: true,

    lang: 'uk-UA',
    title: 'WIN:\\CLI',
    titleTemplate: 'WIN:\\CLI • :title',
    description: 'Переможець терміналу',

    head: [
      ['meta', { property: 'og:title', content: 'WIN:\\CLI • Переможець терміналу' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['link', { rel: 'stylesheet', href: '/css/style.css' }]
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
              { text: 'Shutdown', link: '/guide/shutdown' },
              { text: 'Reboot', link: '/guide/rebooting' },
              { text: 'Proxy', link: '/guide/proxy' },
              { text: 'Users', link: '/guide/user-management' }
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

    notFound: {
      title: 'СТОРІНКУ НЕ ЗНАЙДЕНО',
      quote:
        'Якщо ви не зміните свій напрямок і продовжите шукати, ви можете опинитися там, куди прямуєте.',
      linkLabel: 'йти додому',
      linkText: 'Повернитися на головну сторінку'
    },

    pwa: {
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
    },

    srcExclude: ['**/README.md']
  })
);
