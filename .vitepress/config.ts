import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig } from 'vitepress'

const links: Array<any> = []

export default defineConfig({
  lang: 'zh-CN',
  title: '插件世界',
  titleTemplate: undefined,
  description: '创建属于自己的前端插件、Laravel 插件、Webman 插件、小程序插件、PicGO 插件；让查找优秀的插件不再困难',
  ignoreDeadLinks: true,
  lastUpdated: true,
  // cleanUrls: 'without-subfolders', # 注释了，避免 nginx 静态站部署时，刷新页面会找不到网页

  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '前端插件,Laravel 插件,Webman 插件,小程序插件,PicGO 插件,Vue 插件, React 插件, Angular 插件' }],
    ['script', { src: '//unpkg.com/alpinejs', defer: 'true' }],
  ],

  markdown: {
    theme: 'material-palenight',
    lineNumbers: false,
  },

  themeConfig: {
    // example: logo: '/logo.png',
    // example: logo: false,
    logo: './logo_square_en.jpeg',
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
      '/laravel/': sidebarLaravel(),
      '/frontend/': sidebarFrontend(),
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
      pattern: 'https://gitee.com/github-mouyong/plugins-world/blob/master/src/:path',
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
  // base: '/vitepress-doc-website/',
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
      hostname: 'https://plugins-world.cn'
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
    { text: '指南', link: '/guide/' },
    { text: 'Laravel 插件', link: '/laravel/' },
    { text: '前端插件', link: '/frontend/' },
    // { text: 'Webman 插件', link: '/webman/' },
    // { text: 'PicGo 插件', link: '/picgo/' },
    // { text: '微信小程序插件', link: '/miniprogram/' },
    {
      text: '生态系统',
      items: [
        { text: '团队', link: '/community/teams' },
        { text: '加入我们', link: '/community/join' },
        { text: '赞助我们', link: '/community/sponsor' },
        { text: '贡献指南', link: '/contributing/' },
        { text: '互动交流', link: '/community/discuss' },
        { text: '应用市场', link: 'https://market.plugins-world.org' },
      ],
      activeMatch: `^/(community|contributing)/`,
    },
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

function sidebarLaravel() {
  return [
    {
      text: '插件应用',
      items: [
        { text: '介绍', link: '' },
        { text: '开发流程', link: '' },
      ]
    },
    {
      text: '扩展包',
      items: [
        { text: '介绍', link: '' },
        { text: '开发流程', link: '' },
      ]
    },
  ]
}

function sidebarFrontend() {
  return [
    {
      text: '介绍',
      items: [
        { text: '主程序', link: '' },
        { text: '插件', link: '' },
        { text: '通讯协议', link: '' },
        { text: '通讯流程图', link: '' },
      ]
    },
    {
      text: '部署',
      items: [
        { text: '宝塔 nginx', link: '' },
        { text: 'Docker', link: '' },
        { text: '阿里云 OSS', link: '' },
        { text: '其他', link: '' },
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