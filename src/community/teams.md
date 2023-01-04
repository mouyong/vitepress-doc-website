<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
    {
        avatar: 'https://cdn.fresns.cn/wiki/avatars/mouyong.jpg',
        name: '牟勇',
        title: 'Creator',
        links: [
            { icon: 'github', link: 'https://github.com/mouyong' },
            { 
                icon: {
                    svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1880" height="128" width="128"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="1881"></path></svg>',
                },
                link: 'https://qm.qq.com/cgi-bin/qm/qr?k=HQk1tD_Go7Uu3Lk7qC2NLst16GlHdBXF&jump_from=webapi&authKey=jsPnMLVY465KLRtuHjDXB0DmQpJIovdq2ZGwXNyRLDC1CcLs9DZsrihuFmD+ejnM'
            },
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
