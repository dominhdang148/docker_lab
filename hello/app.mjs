import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Xin chào lớp CTK44!</h2> <p>Chúc các bạn thành công</p>');
});

await connectToDatabase();

app.listen(3000);
