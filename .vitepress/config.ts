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
  cleanUrls: 'without-subfolders', // 注释了，避免 nginx 静态站部署时，刷新页面会找不到网页

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
    socialLinks: [
      { 
        icon: {
          svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1880" height="128" width="128"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1881"></path></svg>'
        },
        link: 'https://gitee.com/github-mouyong/plugins-world' }
      ],
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
        { text: '应用市场', link: 'https://market.plugins-world.cn' },
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
        {
          text: '案例',
          items: [
            { text: 'DcatSass', link: 'https://github.com/mouyong/dcat-saas' },
            { text: 'JWT 登录', link: 'https://github.com/mouyong/laravel-jwt-auth' },
            { text: '本地存储', link: 'https://github.com/mouyong/laravel-local-storage' },
            { text: '七牛云存储', link: 'https://github.com/mouyong/laravel-qiniu' },
          ]
        },
      ]
    },
    {
      text: '扩展包',
      items: [
        { text: '介绍', link: '' },
        { text: '开发流程', link: '' },
        {
          text: '案例',
          items: [
            { text: '全局配置', link: 'https://github.com/mouyong/laravel-config' },
          ]
        },
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
    {
      text: '案例',
      items: [
        { text: '自定义表单', link: 'https://custom-form.hecs.realomics.com/' },
        { text: '审批流设置', link: 'https://csim.hecs.iwnweb.com/platform#/workflowIframe' },
        { text: '音视频', link: '' },
        { text: '文件预览', link: '' },
        { text: '登录、注册', link: '' },
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
        { text: '互动交流', link: '/community/discuss.md' },
        { text: '应用市场', link: 'https://market.plugins-world.cn' },
      ]
    },
  ]
}