const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3010;

// 启用 CORS
app.use(cors());

// 创建 /hello GET 接口
app.get('/hello', (req, res) => {
  res.send('Hello from the CLI server!');
});

// 创建 /url GET 接口
app.get('/url', (req, res) => {
  res.send(process.env.APP_URL || 'No URL provided');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
