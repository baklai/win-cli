import { defineConfig } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';

export default withPwa(
  defineConfig({
    base: '/',
    srcDir: 'src',
    outDir: 'dist',

    appearance: true,
    cleanUrls: true,
    lastUpdated: true,
    i18nRouting: false,

    lang: 'uk-UA',
    title: 'WINCLI',
    titleTemplate: 'WINCLI • :title',
    description: 'Переможець командного рядка',

    head: [
      ['meta', { property: 'og:title', content: 'WIN CLI • Переможець командного рядка' }],
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

    themeConfig: {
      logo: '/img/logo.png',
      siteTitle: false,

      editLink: {
        pattern: 'https://github.com/baklai/win-cli/edit/main/src/:path',
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
        name: 'WIN CLI • Переможець командного рядка',
        short_name: 'WINCLI',
        description: 'Переможець командного рядка',
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