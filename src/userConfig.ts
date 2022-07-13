import userConfig from '../.vitepress/userConfig'

export default Object.assign(userConfig, {
  lang: 'zh-CN',
  title: '项目',
  titleTemplate: undefined,
  description: '项目描述',
  ignoreDeadLinks: true,

  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: '//unpkg.com/alpinejs', defer: true }],
  ],

  markdown: {
    theme: 'material-palenight',
    lineNumbers: false
  },

  themeConfig: {
    logo: false,
    siteTitle: undefined,
    /** https://vitepress.vuejs.org/guide/theme-nav.html#nav */
    nav: [
      { text: '首页', link: '/' },
      { text: '官网', link: '/home' },
      { text: '指南', link: '/guide/' },
      { text: 'API 参考', link: '/api/' },
      { text: '数据字典', link: '/database/' },
      {
        text: '项目资料',
        items: [
          {
            text: '飞书',
            items: [
              { text: '团队协同文档', link: 'https://wv446p4j9c.feishu.cn/docs/doccnuDx1Cloij1MQg25I3Z9yUb' },
              { text: '项目研发流程', link: 'https://wv446p4j9c.feishu.cn/docx/doxcn4BS4V1wo0h1TU14uRZ4icf' },
              { text: 'xx - 目录索引', link: 'https://feishu.cn' },
              { text: 'xx - 项目管理表', link: 'https://wv446p4j9c.feishu.cn/base/bascn38ACf4UHV1cWaPvPEcJoUc' },
              { text: '【xxx 项目】需求及 Bug 管理', link: 'https://wv446p4j9c.feishu.cn/base/bascnpubydTzWJ5M5LJ2lkWSatS' },
            ]
          },
          {
            text: 'Apifox',
            items: [
              { text: '接口文档', link: 'https://www.apifox.cn/web' },
            ]
          }
        ]
      }
    ],
    /** https://vitepress.vuejs.org/guide/theme-sidebar.html#sidebar */
    sidebar: {
      '/guide/': [
        {
          text: '开发资料',
          items: [
            { text: '基础资料', link: '/guide/' },
            { text: 'xxx - 业务流程图', link: '/guide/business-flowchart' },
          ]
        }
      ],
      '/api/': [
        {
          text: '概览',
          items: [
            { text: '目录', link: '/api/' },
            { text: '全局请求头', link: '/api/header' },
            { text: '全局请求参数', link: '/api/request' },
            { text: '全局接口响应', link: '/api/response' },
          ]
        },
        {
          text: '用户',
          items: [
            { text: '新增用户', link: '/api/user/add' },
            { text: '获取用户列表', link: '/api/user/list' },
            { text: '删除用户', link: '/api/user/delete' },
          ]
        },
        {
          text: '接口数据模型',
          items: [
            { text: '用户', link: '/api/models/user' },
          ]
        }
      ],
      '/database/': [
        {
          text: '概览',
          items: [
            { text: '目录', link: '/database/' },
            { text: '用户', link: '/database/user/users' },
          ]
        },
        {
          text: '字典数据',
          items: [
            { text: '民族', link: '/database/dictionary/nation' },
          ]
        }
      ]
    },
    /** https://vitepress.vuejs.org/guide/theme-nav.html#social-links */
    socialLinks: [{ icon: 'github', link: 'https://github.com/mouyong' }],
    copyright: `Copyright © 2014-2022 <a href="https://blog.iwnweb.com" target="_blank">牟勇</a><br>
    <a href="https://laravel-workerman.iwnweb.com/" target="_blank">laravel-workerman</a>&nbsp;
    <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022060258号</a><br>`,
  },

  /**
   * build for sub dir
   */
  base: '/vitepress-doc-website/',
  srcDir: 'src/', // relative of `vitepress-docs-website/` directory
  // outDir: '../../public/docs/', // relative of `vitepress-docs-website/` directory

  /**
   * vite config
   */
  vite: {
    server: {
      host: '0.0.0.0',
      port: 3000,
      // port: 8082,
      hmr: {
        clientPort: 3000,
        // clientPort: 443, // when you using reverse proxy to run docs:dev
      }
    }
  }
})
