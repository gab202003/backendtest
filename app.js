const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('this is a test');
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
