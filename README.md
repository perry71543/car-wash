# DetailPro — 頂級汽車美容電商

台灣在地頂級汽車美容品牌電商網站，採用 Next.js 15 + Tailwind CSS 打造，風格極簡工業風、深色主題、霓虹黃點綴。

## 技術棧

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

---

## 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 本地啟動

```bash
npm run dev
```

開啟瀏覽器前往 [http://localhost:3000](http://localhost:3000)

### 3. 建置生產版本

```bash
npm run build
npm start
```

---

## 部署到 Vercel

### 方法一：GitHub + Vercel（推薦）

1. 將此專案推送到 GitHub：

```bash
git init
git add .
git commit -m "init: DetailPro ecommerce site"
git branch -M main
git remote add origin https://github.com/你的帳號/detailpro.git
git push -u origin main
```

2. 前往 [vercel.com](https://vercel.com)，點選 **New Project**
3. 匯入你的 GitHub repo
4. 設定保持預設（Framework: Next.js 自動偵測）
5. 點選 **Deploy** — 完成！

### 方法二：Vercel CLI

```bash
npm i -g vercel
vercel
```

照提示操作即可。

---

## 頁面結構

| 路徑 | 說明 |
|------|------|
| `/` | 首頁（Hero + 分類 + 熱銷 + 對比 + 套組 + 教學） |
| `/products` | 商品列表（可依分類篩選、排序） |
| `/products/[id]` | 商品詳情頁 |
| `/about` | 品牌故事頁 |

---

## 設計系統

| 元素 | 值 |
|------|-----|
| 主色 | `#0a0a0a` 深黑 |
| 強調色 | `#D4FF00` 霓虹黃 |
| 字型 | Barlow Condensed（標題）/ Barlow（內文） |
| 風格 | 深色模式、工業極簡、高端汽車感 |

---

## 自訂商品

編輯 `src/data/products.js` 新增或修改商品資料。

```js
{
  id: 'product-slug',       // URL 識別碼
  name: '商品名稱',
  category: 'shampoo',      // shampoo / coating / tools / wax
  price: 980,
  originalPrice: 1200,      // 設為 null 則不顯示原價
  image: '圖片URL',
  // ...
}
```

---

## License

MIT
