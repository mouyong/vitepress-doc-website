import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig } from 'vitepress'

const links: Array<any> = []

export default defineConfig({
  lang: 'zh-CN',
  title: '项目名',
  titleTemplate: undefined,
  description: '项目描述',
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: '//unpkg.com/alpinejs', defer: 'true' }],
  ],

  markdown: {
    theme: 'material-palenight',
    lineNumbers: false,
  },

  themeConfig: {
    // logo file path ./public/xxx
    // example: logo: '/logo.png',
    // logo: false,
    logo: '/assets/images/logo.jpeg',
    siteTitle: undefined,
    outlineTitle: '页面梗概',
    lastUpdatedText: '最后一次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    /** https://vitepress.vuejs.org/guide/theme-nav.html#nav */
    nav: navbar(),
    /** https://vitepress.vuejs.org/guide/theme-sidebar.html#sidebar */
    sidebar: {
      '/guide/': sidebarGuide(),
      '/database/': sidebarDatabase(),
      '/api/': sidebarApi(),
      '/community/': sidebarCommunity(),
      '/contributing/': sidebarCommunity(),
    },
    /** https://vitepress.vuejs.org/guide/theme-nav.html#social-links */
    socialLinks: [{ icon: 'github', link: 'https://github.com/mouyong/vitepress-doc-website' }],
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2014-present <a href="https://github.com/mouyong">mouyong</a>'
    },

    editLink: {
      pattern: 'https://github.com/mouyong/vitepress-doc-website/tree/master/src/:path',
      text: '提交改进'
    },

    // algolia: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: ''
    // },

    // carbonAds: {
    //   code: '',
    //   placement: ''
    // }
  },

  /**
   * build for sub dir
   */
  base: '/vitepress-doc-website/',
  srcDir: 'src/', // relative of `vitepress-docs-website/` directory
  // outDir: '../public/docs/', // relative of `vitepress-docs-website/` directory

  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },

  /**
   * build end.
   */
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://blog.iwnweb.com/vitepress-doc-website/'
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },

  /**
   * vite config
   */
  vite: {
    plugins: [
    ],
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


function navbar() {
  return [
    { text: '首页', link: '/' },
    { text: '官网', link: '/home' },
    { text: '指南', link: '/guide/' },
    { text: '数据字典', link: '/database/' },
    { text: 'API 参考', link: '/api/' },
    {
      text: '生态系统',
      items: [
        { text: '团队', link: '/community/teams' },
        { text: '加入我们', link: '/community/join' },
        { text: '贡献指南', link: '/contributing/' },
        { text: '互动交流', link: 'https://github.com/mouyong/vitepress-doc-website/issues' },
      ],
      activeMatch: `^/(community|contributing)/`,
    },
    {
      text: '项目资料',
      items: [
        {
          text: '飞书',
          items: [
            { text: '团队协同文档', link: 'https://wv446p4j9c.feishu.cn/docs/doccnuDx1Cloij1MQg25I3Z9yUb' },
            { text: '项目研发流程', link: 'https://wv446p4j9c.feishu.cn/docx/doxcn4BS4V1wo0h1TU14uRZ4icf' },
            { text: 'xx - 目录索引', link: 'https://feishu.cn' },
            { text: 'xx - 项目管理表（简化）', link: 'https://wv446p4j9c.feishu.cn/base/bascn38ACf4UHV1cWaPvPEcJoUc' },
            { text: '【xxx 项目】需求及 Bug 管理（完整）', link: 'https://wv446p4j9c.feishu.cn/base/bascnpubydTzWJ5M5LJ2lkWSatS' },
          ]
        },
        {
          text: '项目 - 接口文档',
          items: [
            { text: 'Apifox', link: 'https://www.apifox.cn/web' },
          ]
        },
      ]
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '开发资料',
      collapsible: true,
      items: [
        { text: '基础资料', link: '/guide/' },
        { text: 'xxx - 业务流程图', link: '/guide/business-flowchart' },
      ]
    },
    {
      text: '通用支持',
      collapsible: true,
      items: [
        { text: 'Helpers', link: '/guide/support/helpers' },
        { text: 'Utilities', link: '/guide/support/utilities' },
        { text: 'Models', link: '/guide/support/models' },
      ]
    },
  ]
}

function sidebarApi() {
  return [
    {
      text: '概览',
      collapsible: true,
      items: [
        { text: '目录', link: '/api/' },
        { text: '全局请求头', link: '/api/header' },
        { text: '全局请求参数', link: '/api/request' },
        { text: '全局接口响应', link: '/api/response' },
      ]
    },
    {
      text: '用户',
      collapsible: true,
      items: [
        { text: '新增用户', link: '/api/user/add' },
        { text: '获取用户列表', link: '/api/user/list' },
        { text: '删除用户', link: '/api/user/delete' },
      ]
    },
    {
      text: '接口数据模型',
      collapsible: true,
      items: [
        { text: '用户', link: '/api/models/user' },
      ]
    },
  ]
}

function sidebarDatabase() {
  return [
    {
      text: '概览',
      collapsible: true,
      items: [
        { text: '目录', link: '/database/' },
        { text: '用户', link: '/database/user/users' },
      ]
    },
    {
      text: '字典数据',
      collapsible: true,
      items: [
        { text: '民族', link: '/database/dictionary/nation' },
      ]
    },
  ]
}

function sidebarCommunity() {
  return [
    {
      text: '关于',
      collapsible: true,
      items: [
        { text: '团队', link: '/community/teams.md' },
        { text: '加入我们', link: '/community/join.md' },
        { text: '赞助我们', link: '/community/sponsor.md' },
      ]
    },
    {
      text: '贡献',
      collapsible: true,
      items: [
        { text: '贡献指南', link: '/contributing/' },
      ]
    },
    {
      text: '互动',
      collapsible: true,
      items: [
        { text: '互动交流', link: 'https://discuss.fresns.cn' },
        { text: '应用市场', link: 'https://market.fresns.cn/open-source' },
      ]
    },
  ]
}