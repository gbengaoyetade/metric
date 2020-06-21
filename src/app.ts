import express from 'express';
import routes from './routes';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use('/metric', routes)


app.get('/', (req, res) => {
  res.send({ message: 'Welcome to metrics app' })
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})