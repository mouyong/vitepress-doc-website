---
layout: page
---
<script setup>
  import {onMounted, ref} from 'vue'

  onMounted(() => {
    if (location.pathname.includes('home')) {
      // 取消 top 的高度，便于自定也页面文档流
      document.documentElement.style.setProperty('--vp-nav-height-mobile', 0)
      document.documentElement.style.setProperty('--vp-nav-height-desktop', 0)

      // 让导航栏不占用文档流
      document.querySelector('.VPNav').style.visibility = 'hidden'
    } else {
      // 恢复导航栏高度
      document.documentElement.style.setProperty('--vp-nav-height-mobile', '56px')
      document.documentElement.style.setProperty('--vp-nav-height-desktop', '72px')

      // 恢复文档流
      document.querySelector('.VPNav').style.visibility = 'visible'
    }
  })
</script>
<style lang="scss">
  .home {
    .content {
      @apply font-bold text-2xl;

      a {
        @apply text-blue-700;
      }
    }
  }
</style>

<div class="home container w-3/4 m-auto mt-6 flex flex-col justify-center">
  <p class="content">
    在这里你可以使用 <a href="https://vitepress.vuejs.org/guide/using-vue.html">Vue</a> & <a href="https://tailwindcss.com/docs/installation">tailwindcss</a> 自定义页面内容。
  </p>

  <p class="content">截至当前时间 2022-07-08，<a href="https://vitepress.vuejs.org/">vitepress</a> 暂不支持 <a href="https://tailwindui.com/">tailwindui</a></p>
  <p class="content">自定义完成页面后，请在 <code>userConfig.ts</code> 中根据需要重新配置首页的导航栏链接</p>
</div>
