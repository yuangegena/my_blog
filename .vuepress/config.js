module.exports = {
  title: "YuanTouo",
  description: 'hello world',
  dest: 'public',
  base:'/blog/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    record: '蜀ICP备19041416号',
    recordLink: 'https://beian.mps.gov.cn/#/query/webSearch',
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '文档', 
        icon: 'reco-message',
        items: [
          { text: '相关文档', link: '/docs/theme-reco/' },
          { text: 'vue-admin', link: '/docs/vue-admin/' },
        ]
      },
      { text: '联系', 
        icon: 'reco-message',
        items: [
          { text: 'Gitee', link: 'https://gitee.com/yuangegena/dashboard/projects', icon: 'reco-mayun' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme-use',
        'plugin-use',
        'api-use',
      ],
      '/docs/vue-admin/': [
        '',
        'vue-admin-tem',
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 3, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: 'Gitee',
        desc: '欢迎关注Gitee',
        email: 'yuangegena@163.com',
        link: 'https://gitee.com/yuangegena/dashboard/projects'
      },
      {
        title: 'Github',
        desc: '欢迎关注github',
        email: 'yuangegena@163.com',
        link: 'https://github.com/yuangegena'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 作者
    author: 'YuanTouo',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2019',
    // 插件
    // 插件
    plugins: [
      ['flowchart'],  // 支持流程图
      ['vuepress-plugin-smooth-scroll'],  // 平滑滚动
      ['@vuepress/nprogress'],  // 加载进度条
      ['reading-progress'],  // 阅读进度条
    ],

    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  plugins:[
    [ // 播放音乐插件
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          // 配置背景音乐
          {
            name: 'ride it',
            artist: 'Regard',
            url: 'https://ty-1256774756.cos.ap-chengdu.myqcloud.com/blog/Regard%2CJay%20Sean%20-%20Ride%C2%A0It%C2%A0(Regard%C2%A0Remix).mp3',
            cover: 'https://ty-1256774756.cos.ap-chengdu.myqcloud.com/blog/avatar.png'
          },
          {
            name: 'You',
            artist: 'Approaching Nirvana',
            url: 'https://91buy.oss-cn-shenzhen.aliyuncs.com/wx_mini_program/dragon_activity/Approaching%20Nirvana%20-%20You.mp3',
            cover: 'https://ty-1256774756.cos.ap-chengdu.myqcloud.com/blog/avatar.png'
          },
          {
            name: '杀死那个石家庄人',
            artist: '夜难熬吗',
            url: 'https://ty-1256774756.cos.ap-chengdu.myqcloud.com/blog/ssngsjzr.mp3',
            cover: 'https://ty-1256774756.cos.ap-chengdu.myqcloud.com/blog/avatar.png'
          },
          {
            name: 'Anesthesia',
            artist: 'Vexento',
            url: 'https://ty-1256774756.cos.ap-chengdu.myqcloud.com/blog/Anesthesia.mp3',
            cover: 'https://ty-1256774756.cos.ap-chengdu.myqcloud.com/blog/avatar.png'
          }
        ],
        autoplay:true
      }
    ],
    [ // 展示公告插件
      '@vuepress-yard/vuepress-plugin-window',
      {
        title:'公告',
        windowStyle:{right: '20px',top: '70px',width: '260px',},
        contentInfo:{title: '欢迎添加QQ:1468246639 🎉🎉🎉',imgUrl: 'https://ty-1256774756.cos.ap-chengdu.myqcloud.com/blog/avatar.png',needImg: true,content: '', contentStyle: {}},
        bottomInfo:{btnText: '赞赏',linkTo: '/my_blog/person_pages/donate_page/donate.html'},
        delayMount:500,
        closeOnce:false,
        hideRouteList:[]
      }
    ],
    // 代码复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }], 
    // 添加名人名言
    ["vuepress-plugin-boxx"]
  ],
  markdown: {
    lineNumbers: true
  }
}
