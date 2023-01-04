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
                    svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2655" height="128" width="128"><path d="M512 512m-464 0a464 464 0 1 0 928 0 464 464 0 1 0-928 0Z" p-id="2656"></path><path d="M679.04 467.2a80 80 0 0 0-25.28-152.32 81.6 81.6 0 0 0-64 20 134.56 134.56 0 0 1 32 182.56 192 192 0 0 1 82.08 97.92h59.36A21.76 21.76 0 0 0 784 593.6a128 128 0 0 0-104.96-126.4zM394.24 517.44a129.6 129.6 0 0 1-21.28-56.96 134.56 134.56 0 0 1 32-106.24A138.88 138.88 0 0 1 432 331.68a82.24 82.24 0 0 0-39.84-16.8 80 80 0 0 0-46.56 152.32 128 128 0 0 0-105.6 126.4 21.76 21.76 0 0 0 21.76 21.76h50.56a192.96 192.96 0 0 1 81.92-97.92z" fill="#FFFFFF" p-id="2657"></path><path d="M363.68 709.76h288a26.4 26.4 0 0 0 26.4-26.24 155.68 155.68 0 0 0-127.04-152.96 97.28 97.28 0 0 0-30.4-184 88.16 88.16 0 0 0-12.96-0.8A97.28 97.28 0 0 0 464 530.56a155.68 155.68 0 0 0-127.04 152.96 26.4 26.4 0 0 0 26.72 26.24z" fill="#FFFFFF" p-id="2658"></path></svg>',
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
