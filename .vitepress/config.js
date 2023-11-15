import { defineConfig, loadEnv } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';

const { VITE_HOST_NAME } = loadEnv('', process.cwd());

const NAVBAR = [
  { text: 'Документація', link: '/guide/' },
  { text: 'Приклади', link: '/examples/' }
];

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
      { text: 'Командний рядок', link: '/guide/commands/cmd' },
      {
        text: 'Колір командного рядка',
        link: '/guide/commands/color'
      },
      { text: 'Очищення командного рядка', link: '/guide/commands/cls' },
      { text: 'Виведення повідомлень', link: '/guide/commands/echo' },
      { text: 'Вихід з командного рядка', link: '/guide/commands/exit' }
    ]
  },

  {
    text: 'Файлова система',
    collapsed: true,
    items: [
      {
        text: 'Переміщення між каталогами',
        link: '/guide/commands/cd'
      },
      {
        text: 'Спискок файлів та папок',
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
      { text: 'Видалення файлів', link: '/guide/commands/del' }
    ]
  },

  {
    text: 'Файли і текст',
    collapsed: true,
    items: [
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
    collapsed: true,
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
    collapsed: true,
    items: [
      { text: 'Керування дисками та розділами', link: '/guide/commands/diskpart' },
      { text: 'Форматування дисків', link: '/guide/commands/format' },
      { text: 'Зміна атрибутів файлів та папок', link: '/guide/commands/attrib' }
    ]
  },

  {
    text: 'Системні інструменти',
    collapsed: true,
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

    appearance: true,
    cleanUrls: true,
    lastUpdated: true,

    sitemap: {
      hostname: VITE_HOST_NAME,
      lastmodDateOnly: true
    },

    lang: 'uk-UA',
    title: 'WIN:\\CLI',
    titleTemplate: 'WIN:\\CLI • :title',
    description: 'Керівництво з використання можливостей командного рядка Windows',

    head: [
      ['meta', { property: 'name', content: 'Dmitrii Baklai' }],
      ['meta', { property: 'keywords', content: 'windows, cmd, bat' }],
      ['meta', { property: 'language', content: 'uk-UA' }],
      ['meta', { property: 'og:title', content: 'WIN:\\CLI • Інтерпретатор командного рядка' }],
      [
        'meta',
        {
          property: 'og:description',
          content: 'Керівництво з використання можливостей командного рядка Windows'
        }
      ],
      ['meta', { property: 'og:url', content: `${VITE_HOST_NAME ? VITE_HOST_NAME : '/'}` }],
      ['meta', { property: 'og:type', content: 'article' }],
      ['meta', { property: 'og:site_name', content: 'WIN:\\CLI • Інтерпретатор командного рядка' }],
      ['meta', { property: 'og:image', content: `${VITE_HOST_NAME}/img/icon.png` }],
      ['meta', { property: 'og:image:width', content: '512' }],
      ['meta', { property: 'og:image:height', content: '512' }],
      ['meta', { property: 'og:keywords', content: 'windows, cmd, bat' }],
      ['meta', { property: 'og:locale', content: 'uk-UA' }],

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

    markdown: {
      theme: 'vitesse-dark', // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      languages: ['cmd', 'bat', 'vb', 'powershell', 'ps', 'ps1'], // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      lineNumbers: false
    },

    themeConfig: {
      logo: { src: '/img/logo.png', alt: 'WIN:\\CLI' },

      siteTitle: false,

      outline: [2, 3],
      outlineTitle: 'На цій сторінці',

      nav: NAVBAR,

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

      externalLinkIcon: false,

      notFound: {
        title: 'СТОРІНКУ НЕ ЗНАЙДЕНО',
        quote:
          'Якщо ви не зміните свій напрямок і продовжите шукати, ви можете опинитися там, куди прямуєте.',
        linkLabel: 'йти додому',
        linkText: 'На головну сторінку',
        code: '404'
      }
    },

    srcExclude: ['**/README.md'],

    pwa: {
      outDir: '../.vitepress/dist',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'WIN:\\CLI • Інтерпретатор командного рядка',
        short_name: 'WIN:\\CLI',
        description: 'Інтерпретатор командного рядка',
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
