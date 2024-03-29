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
  // cleanUrls: 'without-subfolders', // 注释了，避免 nginx 静态站部署时，刷新页面会找不到网页

  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '前端插件,Laravel 插件,Webman 插件,微信小程序插件,PicGO 插件,Vue 插件, React 插件, Angular 插件' }],
    ['script', { src: '//unpkg.com/alpinejs', defer: 'true' }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://plugins-world.cn/' }],
    ['meta', { property: 'og:title', content: '插件世界' }],
    ['meta', { property: 'og:description', content: '让查找优秀的插件不再困难；快来创建属于你的前端插件、Laravel 插件、Webman 插件、微信小程序插件、PicGO 插件' }],
    ['meta', { property: 'og:image', content: 'https://plugins-world.cn/logo.png' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],

    ['meta', { name: 'baidu-site-verification', content: 'codeva-zqU12S2IfE' }],
  ],

  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: false,
  },

  themeConfig: {
    // example: logo: '/logo_square_en.png',
    // example: logo: undefined,
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
      // '/database/': sidebarDatabase(),
      // '/api/': sidebarApi(),
      '/community/': sidebarCommunity(),
      '/contributing/': sidebarCommunity(),
    },
    /** https://vitepress.vuejs.org/guide/theme-nav.html#social-links */
    socialLinks: [
      {
        icon: {
          svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4808" height="128" width="128"><path d="M832 160c16.954 0 32.986 6.696 45.145 18.855C889.304 191.014 896 207.046 896 224v416c0 16.954-6.696 32.986-18.855 45.145C864.986 697.304 848.954 704 832 704H192c-16.954 0-32.986-6.696-45.145-18.855C134.696 672.986 128 656.954 128 640V224c0-16.954 6.696-32.986 18.855-45.145C159.014 166.696 175.046 160 192 160h640m0-64H192c-70.4 0-128 57.6-128 128v416c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V224c0-70.4-57.6-128-128-128zM736 928H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h448c17.6 0 32 14.4 32 32s-14.4 32-32 32zM736 352H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h448c17.6 0 32 14.4 32 32s-14.4 32-32 32zM544 576H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h256c17.6 0 32 14.4 32 32s-14.4 32-32 32z" p-id="4809"></path></svg>'
        },
        link: 'https://translate.plugins-world.cn'
      },
      {
        icon: {
          svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1894" height="128" width="128"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#888888" p-id="1895"></path></svg>'
        },
        link: 'https://gitee.com/github-mouyong/plugins-world'
      },
    ],
    footer: {
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2014-present <a href="https://mouyong.github.io" target="_blank">mouyong</a><br><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">蜀ICP备17018093号</a>'
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
    if (!/[\\/]404\.html$/.test(id)) {
      let url = pageData.relativePath.replace(/((^|\/)index)?\$/, '$2')
      url = url.replace('.md', '.html')
      links.push({
        // you might need to change this if not using clean urls mode
        url: url,
        lastmod: pageData.lastUpdated
      })
    }
  },

  /**
   * build end.
   */
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://plugins-world.cn/'
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
    { text: '社区', link: 'https://discuss.plugins-world.cn' },
    { text: '指南', link: '/guide/' },
    { text: '前端插件', link: '/frontend/' },
    { text: 'Laravel 插件', link: '/laravel/' },
    // { text: 'Webman 插件', link: '/webman/' },
    // { text: 'PicGo 插件', link: '/picgo/' },
    // { text: '微信小程序插件', link: '/miniprogram/' },
    // { text: '数据字典', link: '/database/' },
    // { text: 'API 参考', link: '/api/' },
    {
      text: '生态系统',
      activeMatch: `^/(community|contributing)/`,
      items: [
        { text: '团队', link: '/community/teams' },
        { text: '加入我们', link: '/community/join' },
        { text: '赞助我们', link: '/community/sponsor' },
        { text: '贡献指南', link: '/contributing/' },
        { text: '常见问题', link: '/community/faq' },
        { text: '提交反馈', link: '/contributing/feedback' },
        { text: '互动交流', link: '/community/discuss' },
        { text: '应用市场', link: 'https://marketplace.plugins-world.cn' },
      ],
    },
    // {
    //   text: '项目资料',
    //   items: [
    //     {
    //       text: '飞书',
    //       items: [
    //         { text: '团队协同文档', link: 'https://wv446p4j9c.feishu.cn/docs/doccnuDx1Cloij1MQg25I3Z9yUb' },
    //         { text: '项目研发流程', link: 'https://wv446p4j9c.feishu.cn/docx/doxcn4BS4V1wo0h1TU14uRZ4icf' },
    //         { text: 'xx - 目录索引', link: 'https://feishu.cn' },
    //         { text: 'xx - 项目管理表（简化）', link: 'https://wv446p4j9c.feishu.cn/base/bascn38ACf4UHV1cWaPvPEcJoUc' },
    //         { text: '【xxx 项目】需求及 Bug 管理（完整）', link: 'https://wv446p4j9c.feishu.cn/base/bascnpubydTzWJ5M5LJ2lkWSatS' },
    //       ]
    //     },
    //     {
    //       text: '项目 - 接口文档',
    //       items: [
    //         { text: 'Apifox', link: 'https://www.apifox.cn/web' },
    //       ]
    //     },
    //   ]
    // }
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
        // { text: 'Webman 插件', link: '/webman/' },
        // { text: 'PicGO 插件', link: '/picgo/' },
        // { text: '微信小程序插件', link: '/miniprogram/' },
      ]
    },
  ]
}

function sidebarFrontend() {
  return [
    {
      text: '概览',
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
      text: '快速入门',
      collapsible: true,
      items: [
        {
          text: '新手指引',
          items: [
            { text: '目录结构', link: '' },
            { text: '引用插件/安装插件', link: '/laravel/install-plugin' },
            { text: '移除插件', link: '/laravel/remove-plugin' },
            { text: '创建插件', link: '/laravel/create-plugin' },
            { text: '发布插件', link: '/laravel/publish-plugin' },
            {
              text: '部署插件',
              collapsible: true,
              items: [
                { text: '宝塔 nginx', link: '' },
                { text: 'Docker', link: '' },
                { text: 'K8S', link: '' },
              ]
            },
          ]
        },
      ]
    },
    {
      text: '插件案例',
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
      text: '概览',
      collapsible: true,
      items: [
        { text: '基本概念', link: '/laravel/' },
        { text: '主程序', link: '' },
        { text: '插件', link: '' },
        { text: '通讯协议', link: '' },
        { text: '通讯流程图', link: '' },
      ]
    },
    {
      text: '快速入门',
      collapsible: true,
      items: [
        {
          text: '新手指引',
          items: [
            { text: '目录结构', link: '' },
            { text: '引用插件/安装插件', link: '' },
            { text: '创建插件', link: '' },
            { text: '发布插件', link: '' },
          ]
        },
      ]
    },
    {
      text: '插件案例',
      items: [
        { text: '全局配置', link: 'https://github.com/mouyong/laravel-config' },
        { text: '文档生成工具', link: 'https://github.com/mouyong/laravel-doc' },
        { text: 'DcatSaas', link: '/laravel/case/dcat-saas' },
        { text: 'JWT 登录', link: 'https://github.com/mouyong/laravel-jwt-auth' },
        { text: '本地存储', link: 'https://github.com/mouyong/laravel-local-storage' },
        { text: '七牛云存储', link: 'https://github.com/mouyong/laravel-qiniu' },
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
        { text: '通用数据结构', link: '/api/models/' },
      ]
    },
    {
      text: '用户',
      collapsible: true,
      items: [
        { text: '新增用户', link: '/api/users/create_user' },
        { text: '获取用户列表', link: '/api/users/get_user_list' },
        { text: '删除用户', link: '/api/users/delete_user' },
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
      ]
    },
    {
      text: '模型',
      collapsible: true,
      items: [
        { text: '用户', link: '/database/users/users' },
      ]
    },
    {
      text: '字典数据',
      collapsible: true,
      items: [
        { text: '目录', link: '/database/dictionary/' },
        { text: '民族', link: '/database/dictionary/ethnicity' },
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
