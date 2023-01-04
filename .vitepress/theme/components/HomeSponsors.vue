<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'
const { data } = useSponsor()
</script>

<template>
  <VPHomeSponsors
    v-if="data"
    message="Plugins World is free and open source, made possible by wonderful sponsors."
    action-text="Become a sponsor"
    action-link="https://gitee.com/github-mouyong/plugins-world?donate=true"
    :data="data"
  />
</template>