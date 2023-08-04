import { defineConfig } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';

export default withPwa(
  defineConfig({
    base: '/',
    outDir: 'dist',

    appearance: true,
    cleanUrls: true,
    lastUpdated: true,
    i18nRouting: false,

    lang: 'uk-UA',
    title: 'WIN:\\CLI',
    titleTemplate: 'WIN:\\CLI • :title',
    description: 'Переможець терміналу',

    head: [
      ['meta', { property: 'og:title', content: 'WIN:\\CLI • Переможець терміналу' }],
      ['link', { rel: 'stylesheet', href: '/css/style.css' }]
    ],

    themeConfig: {
      logo: '/img/logo.png',
      siteTitle: false,

      sidebarMenuLabel: 'Меню',
      returnToTopLabel: 'Повернутися до початку',
      langMenuLabel: 'Змінити мову',
      darkModeSwitchLabel: 'Зовнішній вигляд',
      outlineTitle: 'На цій сторінці',
      lastUpdatedText: 'Останнє оновлення',

      notFound: {
        title: 'СТОРІНКУ НЕ ЗНАЙДЕНО',
        quote:
          'Якщо ви не зміните свій напрямок і продовжите шукати, ви можете опинитися там, куди прямуєте.',
        linkLabel: 'йти додому',
        linkText: 'Повернитися на головну сторінку'
      },
      nav: [
        { text: 'Документація', link: '/guide/introduction' },
        { text: 'Приклади', link: '/examples/introduction' }
      ],
      sidebar: [
        {
          text: 'Початок',
          items: [
            { text: 'Вступ', link: '/guide/introduction' },
            { text: 'Приклади', link: '/examples/introduction' },
            { text: 'Швидкий старт', link: '/guide/quick-start' }
          ]
        },
        {
          text: 'Документація',
          collapsed: false,
          items: [
            { text: 'Shutdown', link: '/guide/shutdown' },
            { text: 'Reboot', link: '/guide/rebooting' },
            { text: 'Proxy', link: '/guide/proxy' },
            { text: 'Users', link: '/guide/user-management' }
          ]
        },
        {
          text: 'Приклади',
          collapsed: true,
          items: []
        }
      ],
      footer: {
        message: 'Ліцензія MIT',
        copyright: `Всі права збережено © ${new Date().getFullYear()} Dmitrii Baklai`
      },
      docFooter: {
        prev: 'Попередня сторінка',
        next: 'Наступна сторінка'
      },

      editLink: {
        pattern: 'https://github.com/baklai/win-cli/edit/main/:path',
        text: 'Відредагувати сторінку на GitHub'
      },

      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: 'Пошук',
                  buttonAriaLabel: 'Показати детальний список'
                },
                modal: {
                  noResultsText: 'Немає результатів для',
                  resetButtonTitle: 'Скинути пошук',
                  footer: {
                    selectText: 'вибрати',
                    navigateText: 'для навігації'
                  }
                }
              }
            }
          }
        }
      },

      socialLinks: [
        {
          icon: 'linkedin',
          link: 'https://www.linkedin.com/in/dmitrii-baklai-1370a3170/'
        },
        { icon: 'github', link: 'https://github.com/baklai' }
      ]
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
    }
  })
);
