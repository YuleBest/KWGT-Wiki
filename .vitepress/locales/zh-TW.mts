import { defineConfig } from 'vitepress'

export const twConfig = defineConfig({
  lang: 'zh-TW',
  description: 'KWGT Wiki',

  themeConfig: {
    outline: {
      label: '頁面大綱',
    },

    returnToTopLabel: '返回頂部',

    docFooter: {
      prev: '上一頁',
      next: '下一頁',
    },

    lastUpdated: {
      text: '最後更新於',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short',
      },
    },

    darkModeSwitchLabel: '外觀',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',
    sidebarMenuLabel: '菜單',

    editLink: {
      pattern: 'https://github.com/YuleBest/KWGT-Wiki/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-TW': {
            translations: {
              button: {
                buttonText: '搜尋文件',
                buttonAriaLabel: '搜尋文件',
              },
              modal: {
                displayDetails: '顯示詳細列表',
                resetButtonTitle: '重置搜尋',
                backButtonTitle: '關閉搜尋',
                noResultsText: '無法找到相關結果',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉',
                },
              },
            },
          },
        },
      },
    },

    notFound: {
      title: '你似乎迷路了?',
      quote: '如果你不改變方向，一直尋找，你最終可能會到達你所前往的地方。',
      linkText: '帶我回家',
      linkLabel: '返回首頁',
    },
  },
})
