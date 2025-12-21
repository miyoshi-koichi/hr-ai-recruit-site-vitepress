# Changelog

## 開発作業を再開する場合

新しいClaude Codeセッションで以下をコピペして質問してください：

```
カヤック採用サイトの続きを進めたいです。
プロジェクトは /Users/miyoshi-koichi/cursor/kayac/kayac-recruit-site にあります。
CHANGELOG.mdを確認して、現在の状態と次のタスクを教えてください。
```

---

## 2025-11-10

### Added
- ARCHITECTURE.md を新規作成
  - システム設計と技術仕様を詳細に記載
  - ディレクトリ構成の説明
  - トラブルシューティングガイド
- CHANGELOG.md を新規作成（このファイル）
  - .claude.md ガイドラインに準拠した開発履歴管理
- OGP（Open Graph Protocol）設定を追加
  - OGP画像（1200x630px）を設定
  - サイトURL、タイトル、ディスクリプションを設定
  - 画像サイズ指定（width: 1200, height: 630）
- Twitter Card設定を追加
  - summary_large_image形式
  - タイトル、ディスクリプション、画像を設定
- Favicon（favicon.ico）を追加
- ロゴ画像（logo.png）を追加
  - `/docs/public/images/` ディレクトリに配置
  - ヘッダーロゴとして設定（47px高さ）

### Changed
- プロジェクト構成を .claude.md の「個人向け開発（シンプル構造）」ガイドラインに準拠
  - ドキュメント構成の整理
- サイトタイトルを変更
  - 「面白法人カヤック 採用サイト｜バグってるくらいが、ちょうどいい。」
- タイトル表示形式をカスタマイズ
  - `titleTemplate: ':title'` を設定
  - TOPページ: サイトタイトルのみ表示
  - その他のページ: ページタイトルのみ表示（サイトタイトルを非表示）
- Difyチャットボットの位置を調整
  - `bottom: 1rem` に変更（画面下端により近く配置）
- ロゴサイズを調整
  - 47px高さ（約1.3倍に拡大）

### Fixed
- Difyチャットボットが表示されない問題を解決
  - `defer: ''` を維持（VitePressの正しい形式）
  - 本番環境（GitHub Pages）でのみ動作することを確認

---

## 2025-11-08

### Changed
- README.md の構成変更
  - Claude Code作業再開手順を最上部に移動
  - 視認性向上

---

## 2025-11-06

### Added
- README.md を追加
  - プロジェクト概要
  - 完了タスクと今後のタスク一覧
  - 開発コマンド
  - デプロイフロー説明

---

## 2025-11-05

### Added
- VitePressサイトの基本構築完了
- GitHub Pagesへの自動デプロイ設定
- Difyチャットボット統合
  - スクロール追従対応（position: fixed）
  - 画面右下配置
- 会社概要ページ作成
  - about.md: 組織紹介
  - culture.md: 企業文化
  - office.md: オフィス環境
- 事業紹介ページ作成
  - business.md: 事業概要
  - business-produce.md: 面白プロデュース事業
  - business-game.md: ゲーム事業
  - business-community.md: ゲームコミュニティ事業
  - business-regional.md: 地域資本主義事業
- 採用情報ページの骨組み作成
  - jobs.md: 募集要項（内容未記入）
  - process.md: 選考フロー（内容未記入）
  - faq.md: FAQ（内容未記入）

### Changed
- ナビゲーション構成の調整
  - 右上ナビゲーション削除
  - 左サイドバーをメインナビゲーションに変更
- ダークモードの無効化
  - ダークモードトグルボタン削除
  - `appearance: false` 設定

### Fixed
- ダークモード設定の修正
  - 文字列 `'false'` からブール値 `false` に変更
- GitHub右上アイコンの削除

---

## 2025-11-04

### Added
- プロジェクト初期化
- GitHubリポジトリ作成（個人アカウント）
- VitePressのインストールと初期設定
- GitHub Actions デプロイワークフロー作成
