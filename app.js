const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('thank you');
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
