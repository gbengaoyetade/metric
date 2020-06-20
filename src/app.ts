import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to metrics app' })
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})