const express = require('express');
const app = express();
const products = require('./data/products');

// publicフォルダの中身を静的ファイルとして配信
app.use(express.static('public'));

// APIエンドポイント
app.get('/api/products', (req, res) => {
  console.log("✅ /api/products にアクセスされました");
  res.json(products);
});

// ポート番号は環境変数から取得、ない場合は3000番を使用
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));