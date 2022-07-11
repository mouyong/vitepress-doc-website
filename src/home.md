---
layout: page
---
<script setup>
  import { onMounted } from 'vue'

  onMounted(() => {
    // .vitepress/theme/js/nav.js
    window.toggleNavbarOnPageChange()
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
