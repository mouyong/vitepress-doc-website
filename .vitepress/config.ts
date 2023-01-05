import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig } from 'vitepress'

const links: Array<any> = []

export default defineConfig({
  lang: 'zh-CN',
  title: '插件世界',
  titleTemplate: undefined,
  description: '让查找优秀的插件不再困难；快来创建属于你的前端插件、Laravel 插件、Webman 插件、小程序插件、PicGO 插件',
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
    logo: './logo_square_en.png',
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
          svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1894" height="128" width="128"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#888888" p-id="1895"></path></svg>'
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
    // { text: '指南', link: '/guide/' },
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
        {
          text: '管理器',
          items: [
            { text: '介绍', link: '/laravel/index.md' },
            { text: '插件开发', link: '/laravel/plugin-create.md' },
            { text: '插件安装', link: '/laravel/plugin-install.md' },
          ]
        },
        {
          text: '案例',
          items: [
            { text: 'DcatSaas', link: '/laravel/case/dcat-saas.md' },
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
            { text: '文档生成工具', link: 'https://github.com/mouyong/laravel-doc' },
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