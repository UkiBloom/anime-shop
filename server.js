const express = require('express');
const app = express();
const products = require('./data/products');

//↓画像を表示させる
const express = require('express');
const app = express();

// ここでpublicフォルダの中身を配信する設定！
app.use(express.static('public'));

// 確認用ログ（アクセスされたら表示される）
app.get('/api/products', (req, res) => {
  console.log("✅ /api/products にアクセスされました");
  res.json(products);
});

const PORT = 3000; // ポート番号を5000→3000に変更してみた
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));