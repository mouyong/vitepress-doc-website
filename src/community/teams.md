<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
    {
        avatar: 'https://cdn.fresns.cn/wiki/avatars/mouyong.jpg',
        name: '牟勇',
        title: 'Creator',
        links: [
            { icon: 'github', link: 'https://github.com/mouyong' },
        ]
    },
]

const oldMembers = [
]
</script>

# 团队

## 核心团队活跃成员

 `插件世界` 的研发和生态建设以开源组织方式协作，这里会展示核心参与者的信息。

<VPTeamMembers size="small" :members="members" />

## 核心团队荣誉成员

我们在此致敬过去曾做出过突出贡献的不再活跃的团队成员。

<VPTeamMembers size="small" :members="oldMembers" />

## 社区伙伴

一些 `插件世界` 的社区成员让这里变得更加丰富多彩，有必要在此特别提及。我们与这些主要合作伙伴建立了更加亲密的关系，经常与他们就即将到来的功能和新闻展开协作。
