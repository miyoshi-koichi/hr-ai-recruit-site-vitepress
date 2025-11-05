import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Kayac Recruit',
  description: '面白法人カヤック採用サイト',

  // GitHub Pagesのベースパス（リポジトリ名に合わせて変更してください）
  base: '/kayac-recruit-site/',

  // クリーンなURL（.html拡張子を隠す）
  cleanUrls: 'without-subfolders',

  // 日本語対応
  lang: 'ja-JP',

  // メタタグ（AI可読性向上）
  head: [
    ['meta', { name: 'keywords', content: 'カヤック,採用,リクルート,Kayac' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Kayac Recruit' }],
    ['meta', { property: 'og:description', content: '面白法人カヤック採用サイト' }],
    ['script', {}, 'window.difyChatbotConfig = { token: "5EhTvLU7SYJQYlpT", inputs: {}, systemVariables: {}, userVariables: {} };'],
    ['script', { src: 'https://udify.app/embed.min.js', id: '5EhTvLU7SYJQYlpT', defer: '' }],
    ['style', {}, '#dify-chatbot-bubble-button { background-color: #1C64F2 !important; } #dify-chatbot-bubble-window { width: 24rem !important; height: 40rem !important; }'],
  ],

  // サイドバー設定
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '会社紹介', link: '/about' },
      { text: '募集要項', link: '/jobs' },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
      {
        text: 'カヤックについて',
        items: [
          { text: '会社概要', link: '/about' },
          { text: '企業文化', link: '/culture' },
          { text: '事業内容', link: '/business' }
        ]
      },
      {
        text: '採用情報',
        items: [
          { text: '募集職種', link: '/jobs' },
          { text: '選考フロー', link: '/process' },
          { text: 'FAQ', link: '/faq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kayac' }
    ],

    // フッター
    footer: {
      message: 'AI搭載採用サイト',
      copyright: 'Copyright © 2025 Kayac Inc.'
    }
  }
})
