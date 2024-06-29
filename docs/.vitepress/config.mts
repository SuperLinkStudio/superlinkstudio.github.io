import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Project Docs",
  description: "SuperLinkStudio's all project docs",
  rewrites: {
    'source/:page': 'destination/:page'
  },
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/114594856?s=200&v=4',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'LLQQNT', link: '/LLQQNT/' },
      { text: '项目', link: '/project/' },
    ],

    sidebar: {
      "/":[
      {
        text: '项目',
        items: [
          { text:'主页' , link: '/project/'},
          { text: 'SMSboom-HXCZ', link: '/project/smsboom-hxcz' },
          { text:'MiniMinecraftMod-Copier', link: '/project/MiniMinecraftMod-Copier'},
          { text:'Ollama-Services-Forwarding', link: '/project/ollama-services-forwarding'},
          { text:'Ollama-Services-Forwarding', link: '/project/ollama-services-forwarding'},
        ]
      }],
      "/LLQQNT/":[{
        text: 'LLQQNT',
        items: [
          { text: '主页', link: '/LLQQNT/' },
          { text: '安装LLQQNT', link: '/LLQQNT/install'},
          { text: '安装LiteLoaderPlugin', link: '/LLQQNT/install_plugin'},
          { text: '插件列表', link: '/LLQQNT/plugin' },
          { text: '共同开发LLQQNT插件商店', link: '/LLQQNT/plugin-store'}
        ]
      }],
    },

    socialLinks: [
       { icon: 'github', link: 'https://github.com/SuperLinkStudio' }
    ]
  }
})
