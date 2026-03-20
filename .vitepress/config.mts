import { defineConfig } from 'vitepress'
import { zhConfig } from './locales/zh-CN.mjs'
import { twConfig } from './locales/zh-TW.mjs'

import { kwgtLang } from './theme/shiki-kwgt.mjs'

export default defineConfig({
  ...zhConfig,
  srcDir: 'docs',

  title: 'KWGT Wiki',
  base: '/',

  themeConfig: {
    ...zhConfig.themeConfig,

    search: {
      provider: 'local',
      options: {
        locales: {
          root: zhConfig.themeConfig!.search!.options!.locales!.root,
          'zh-TW': twConfig.themeConfig!.search!.options!.locales!['zh-TW'],
        },
      },
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '公式', link: '/f/' },
      { text: '教程', link: '/g/' },
      { text: '百科', link: '/w/' },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/YuleBest' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 KWGT Wiki',
    },
  },

  vite: {
    server: {
      host: '0.0.0.0',
      port: 4567,
    },
  },

  cleanUrls: true,
  ignoreDeadLinks: true,

  lastUpdated: true,

  markdown: {
    shikiSetup: async (shiki) => {
      await shiki.loadLanguage(kwgtLang)
    },
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    'zh-TW': {
      label: '繁體中文',
      link: '/zh-TW/',
      ...twConfig,
      themeConfig: {
        ...twConfig.themeConfig,
        nav: [
          { text: '首頁', link: '/zh-TW/' },
          { text: '公式', link: '/zh-TW/f/' },
          { text: '教程', link: '/zh-TW/g/' },
          { text: '百科', link: '/zh-TW/w/' },
        ],
      },
    },
  },

  head: [
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: '',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap',
      },
    ],
  ],
})
