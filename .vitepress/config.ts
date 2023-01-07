import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig } from 'vitepress'

const links: Array<any> = []

export default defineConfig({
  lang: 'zh-CN',
  title: '插件世界',
  titleTemplate: undefined,
  description: '让查找优秀的插件不再困难；快来创建属于你的前端插件、Laravel 插件、Webman 插件、微信小程序插件、PicGO 插件',
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: 'without-subfolders', // 注释了，避免 nginx 静态站部署时，刷新页面会找不到网页

  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '前端插件,Laravel 插件,Webman 插件,微信小程序插件,PicGO 插件,Vue 插件, React 插件, Angular 插件' }],
    ['script', { src: '//unpkg.com/alpinejs', defer: 'true' }],
  ],

  markdown: {
    theme: 'material-palenight',
    lineNumbers: false,
  },

  themeConfig: {
    // example: logo: '/logo_square_en.png',
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
        link: 'https://gitee.com/github-mouyong/plugins-world' 
      },
      // {
      //   icon: {
      //     svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2686" height="128" width="128"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="2687"></path></svg>'
      //   },
      //   link: 'https://github.com/mouyong/vitepress-doc-website' 
      // },
      {
        icon: {
          svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4808" height="128" width="128"><path d="M832 160c16.954 0 32.986 6.696 45.145 18.855C889.304 191.014 896 207.046 896 224v416c0 16.954-6.696 32.986-18.855 45.145C864.986 697.304 848.954 704 832 704H192c-16.954 0-32.986-6.696-45.145-18.855C134.696 672.986 128 656.954 128 640V224c0-16.954 6.696-32.986 18.855-45.145C159.014 166.696 175.046 160 192 160h640m0-64H192c-70.4 0-128 57.6-128 128v416c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V224c0-70.4-57.6-128-128-128zM736 928H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h448c17.6 0 32 14.4 32 32s-14.4 32-32 32zM736 352H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h448c17.6 0 32 14.4 32 32s-14.4 32-32 32zM544 576H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h256c17.6 0 32 14.4 32 32s-14.4 32-32 32z" p-id="4809"></path></svg>'
        },
        link: 'https://laravel-workerman.iwnweb.com/' 
      },
    ],
    footer: {
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2014-present <a href="https://blog.iwnweb.com">mouyong</a>'
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
        url: pageData.relativePath.replace(/((^|\/)index)?\$/, '$2'),
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
    { text: '前端插件', link: '/frontend/' },
    { text: 'Laravel 插件', link: '/laravel/' },
    { text: 'Webman 插件', link: '/webman/' },
    { text: 'PicGo 插件', link: '/picgo/' },
    { text: '微信小程序插件', link: '/miniprogram/' },
    {
      text: '生态系统',
      items: [
        { text: '团队', link: '/community/teams' },
        { text: '加入我们', link: '/community/join' },
        { text: '赞助我们', link: '/community/sponsor' },
        { text: '贡献指南', link: '/contributing/' },
        { text: '常见问题', link: '/community/faq' },
        { text: '提交反馈', link: '/contributing/feedback' },
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
      text: '简介',
      collapsible: true,
      items: [
        { text: '基本概念', link: '/guide/' },
      ]
    },
    {
      text: '最佳实践',
      collapsible: true,
      items: [
        { text: '前端插件', link: '/frontend/' },
        { text: 'Laravel 插件', link: '/laravel/' },
        { text: 'Webman 插件', link: '/webman/' },
        { text: 'PicGO 插件', link: '/picgo/' },
        { text: '微信小程序插件', link: '/miniprogram/' },
      ]
    },
  ]
}

function sidebarFrontend() {
  return [
    {
      text: '简介',
      collapsible: true,
      items: [
        { text: '基本概念', link: '/frontend/' },
        { text: '主程序', link: '' },
        { text: '插件', link: '' },
        { text: '通讯协议', link: '' },
        { text: '通讯流程图', link: '' },
      ]
    },
    {
      text: '部署',
      collapsible: true,
      items: [
        { text: '宝塔 nginx', link: '' },
        { text: 'Docker', link: '' },
        { text: '阿里云 OSS', link: '' },
        { text: '其他', link: '' },
      ]
    },
    {
      text: '案例',
      collapsible: true,
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

function sidebarLaravel() {
  return [
    {
      text: '插件应用',
      collapsible: true,
      items: [
        {
          text: '管理器',
          items: [
            { text: '简介', link: '/laravel/index.md' },
            { text: '开发插件', link: '/laravel/create-plugin.md' },
            { text: '发布插件', link: '/laravel/publish-plugin.md' },
            { text: '安装插件', link: '/laravel/install-plugin.md' },
            { text: '移除插件', link: '/laravel/remove-plugin.md' },
          ]
        },
        {
          text: '插件案例',
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
      collapsible: true,
      items: [
        { text: '简介', link: '' },
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

function sidebarCommunity() {
  return [
    {
      text: '关于',
      collapsible: true,
      items: [
        { text: '团队', link: '/community/teams' },
        { text: '加入我们', link: '/community/join' },
        { text: '赞助我们', link: '/community/sponsor' },
      ]
    },
    {
      text: '贡献',
      collapsible: true,
      items: [
        { text: '贡献指南', link: '/contributing/' },
        { text: '常见问题', link: '/community/faq' },
        { text: '提交反馈', link: '/contributing/feedback' },
      ]
    },
    {
      text: '互动',
      collapsible: true,
      items: [
        { text: '互动交流', link: '/community/discuss' },
        { text: '应用市场', link: 'https://market.plugins-world.cn' },
      ]
    },
  ]
}