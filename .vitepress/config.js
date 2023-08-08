import { defineConfig, loadEnv } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';

const ENV = loadEnv('', process.cwd());

const SIDEBAR_QUIDE = [
  {
    items: [
      { text: 'Вступ', link: '/guide/' },
      { text: 'Основні поняття', link: '/guide/basic-concepts' },
      { text: 'Швидкий старт', link: '/guide/quick-start' }
    ]
  },

  {
    text: 'Основні команди',
    collapsed: false,
    items: [
      {
        text: 'Робота з каталогами та переміщення між ними',
        link: '/guide/commands/cd'
      },
      {
        text: 'Виведення списку файлів та папок в поточному каталозі',
        link: '/guide/commands/dir'
      },
      {
        text: 'Створення каталогів',
        link: '/guide/commands/mkdir'
      },
      {
        text: 'Видалення каталогів',
        link: '/guide/commands/rmdir'
      },
      {
        text: 'Перейменування файлів та папок',
        link: '/guide/commands/rename'
      },
      {
        text: 'Копіювання файлів',
        link: '/guide/commands/copy'
      },
      {
        text: 'Переміщення файлів',
        link: '/guide/commands/move'
      },
      { text: 'Видалення файлів', link: '/guide/commands/del' },
      { text: 'Очищення екрану консолі', link: '/guide/commands/cls' }
    ]
  },

  {
    text: 'Робота з файлами і текстом',
    collapsed: false,
    items: [
      { text: 'Виведення повідомлень у консоль', link: '/guide/commands/echo' },
      { text: 'Виведення вмісту текстових файлів', link: '/guide/commands/type' },
      {
        text: 'Пошук тексту у файлі',
        link: '/guide/commands/find'
      },
      {
        text: 'Розширений пошук тексту в файлі',
        link: '/guide/commands/findstr'
      },
      {
        text: 'Посторінкове відображення текстових файлів',
        link: '/guide/commands/more'
      }
    ]
  },

  {
    text: 'Адміністративні команди',
    collapsed: false,
    items: [
      { text: 'Інформація про мережу', link: '/guide/commands/ipconfig' },
      { text: 'Стан мережевих підключень', link: '/guide/commands/netstat' },
      { text: 'Управління користувачами', link: '/guide/commands/net-user' },
      { text: 'Управління локальними групами', link: '/guide/commands/net-localgroup' },
      { text: 'Мережеві налаштування та інформація', link: '/guide/commands/net' },
      { text: 'Налаштування проксі-серверу', link: '/guide/commands/netsh-winhttp' },
      {
        text: 'Список активних процесів',
        link: '/guide/commands/tasklist'
      },
      {
        text: 'Завершення процесів',
        link: '/guide/commands/taskkill'
      },
      {
        text: 'Перевірка та відновлення цілісності файлової системи',
        link: '/guide/commands/chkdsk'
      },
      { text: 'Перевірка цілісності системних файлів', link: '/guide/commands/sfc' }
    ]
  },

  {
    text: 'Робота з даними та дисками',
    collapsed: false,
    items: [
      { text: 'Керування дисками та розділами', link: '/guide/commands/diskpart' },
      { text: 'Форматування дисків', link: '/guide/commands/format' },
      { text: 'Зміна атрибутів файлів та папок', link: '/guide/commands/attrib' }
    ]
  },

  {
    text: 'Системні інструменти',
    collapsed: false,
    items: [
      {
        text: 'Інформація про систему',
        link: '/guide/commands/systeminfo'
      },
      {
        text: 'Вимкнення та перезавантаження системи',
        link: '/guide/commands/shutdown'
      }
    ]
  }
];

const SIDEBAR_EXAMPLES = [
  { text: 'Вступ', link: '/examples/' },

  {
    text: 'Скрипти та автоматизація',
    items: []
  }
];

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
        '/guide/': SIDEBAR_QUIDE,
        '/examples/': SIDEBAR_EXAMPLES
      },

      aside: true,

      editLink: {
        pattern: 'https://github.com/baklai/win-cli/edit/main/src/:path',
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
