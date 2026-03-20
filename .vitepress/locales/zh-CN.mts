import { defineConfig } from 'vitepress'

export const zhConfig = defineConfig({
  lang: 'zh-CN',
  description: 'KWGT Wiki',

  themeConfig: {
    outline: {
      label: '页面大纲',
    },

    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short',
      },
    },

    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',

    editLink: {
      pattern: 'https://github.com/YuleBest/KWGT-Wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },

    notFound: {
      title: '你似乎迷路了?',
      quote: '如果你不改变方向，一直寻找，你最终可能会到达你所前往的地方。',
      linkText: '带我回家',
      linkLabel: '返回首页',
    },
  },
})
