---
layout: false
title: 官网
titleTemplate: false
---
<script setup>
  import { onMounted, ref } from 'vue'

  onMounted(() => {
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
    在这里你可以使用 <a href="https://vitepress.vuejs.org/guide/using-vue.html" target="_blank">Vue</a> & <a href="https://tailwindcss.com/docs/installation" target="_blank">tailwindcss</a> 自定义页面内容。
  </p>

  <p class="content">在 <a href="https://vitepress.vuejs.org/" target="_blank">vitepress</a> 中使用 <a href="https://tailwindui.com/" target="_blank">tailwindui</a> 时，需要移除 html 中的空行。见 <a href="https://github.com/vuejs/vitepress/issues/939" target="_blank">Issue 939</a></p>
  <p class="content">自定义完成页面后，请在 <code>.vitepress/config.ts</code> 中根据需要重新配置首页的导航栏链接</p>

  <p>Alpine js demo: Please click the Expand button.</p>
  <div x-data="{ open: false }">
      <button x-on:click="open = !open">Expand</button>
      <span x-show="open">
        Content...
      </span>
  </div>
</div>
