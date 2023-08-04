import { defineConfig } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';

export default withPwa(
  defineConfig({
    base: '/',
    srcDir: 'src',
    outDir: 'dist',

    appearance: true,
    cleanUrls: true,
    i18nRouting: false,

    lang: 'uk-UA',
    title: 'WINCLI',
    titleTemplate: 'WINCLI • :title',
    description: 'Хаб технічної підтримки',

    head: [
      ['meta', { property: 'og:title', content: 'WIN CLI • Хаб технічної підтримки' }],
      ['link', { rel: 'stylesheet', href: '/css/style.css' }]
    ],

    locales: {
      root: {
        lang: 'uk',
        link: '/',
        label: 'Українська',
        themeConfig: {
          langMenuLabel: 'Змінити мову',
          outlineTitle: 'На цій сторінці',
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
          }
        }
      }
    },

    lastUpdated: true,

    themeConfig: {
      logo: '/img/logo.png',
      siteTitle: false,

      editLink: {
        pattern: 'https://github.com/baklai/win-cli/edit/main/src/:path',
        text: 'Відредагувати цю сторінку на GitHub'
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
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'WIN CLI • Хаб технічної підтримки',
        short_name: 'WINCLI',
        description: 'Хаб технічної підтримки',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }
  })
);
