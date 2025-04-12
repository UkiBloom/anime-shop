const express = require('express');
const app = express();
const products = require('./data/products');

// 確認用ログ（アクセスされたら表示される）
app.get('/api/products', (req, res) => {
  console.log("✅ /api/products にアクセスされました");
  res.json(products);
});

const PORT = 3000; // ポート番号を5000→3000に変更してみた
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));