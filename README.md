# 🕐 TinyTasks

**TinyTasks** は「1分で終わる小さなタスク」を気軽に管理できる、  
シンプルで感覚的な ToDo アプリです。  

---

## 🚀 セットアップ

### 1. リポジトリをクローン

```
git clone https://github.com/your-username/tinytasks.git
cd tinytasks
```

### 2. パッケージをインストール

```
npm install
```

### 3. 開発サーバーを起動

```
npm run dev
```

→ 立ち上がったらブラウザで以下を開きます：

🔗 [http://localhost:3000](http://localhost:3000)

---

## 💡 使い方

### 🏠 ホーム画面
起動すると、中央に「TinyTasks」カードが表示されます。  
ここであなたの「すぐできるタスク」を管理します。

---

### ➕ 新しいタスクを追加

1. **「＋ 新しいタスクを追加」ボタン** をクリック  
2. モーダルが開きます  
3. タスクの内容を入力  
4. 下の **スライダーで重要度（1〜5）** を調整  
   - 低：緑（1）  
   - 高：赤（5）  
5. 「追加」ボタンで保存

👉 タスクは自動的に **重要度の高い順** に並び替えられます。

---

### 🗑️ タスクを削除

- 各タスクの右側にある **ゴミ箱アイコン**（🗑️）をクリックで削除できます。

---

### 💾 データの保存

- タスクは **ブラウザの LocalStorage** に自動保存されます。
- ページをリロードしてもデータは保持されます。

---

### ⚙️ 技術スタック

| 分類 | 使用技術 |
|------|------------|
| フロントエンド | [Next.js 15 (App Router)](https://nextjs.org/) |
| 言語 | TypeScript |
| スタイリング | [Tailwind CSS](https://tailwindcss.com/) |
| アニメーション | [Framer Motion](https://www.framer.com/motion/) |
| アイコン | [React Icons](https://react-icons.github.io/react-icons/) |
| デプロイ | [Vercel](https://vercel.com/) |