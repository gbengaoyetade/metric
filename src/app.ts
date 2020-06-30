import express from 'express';
import routes from './routes';
import { cleanUp } from './helpers/cleanUp';
import { oneHour } from './helpers/constants';


const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV;
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use('/metric', routes);

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to metrics app' });
});

app.all('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

if(nodeEnv !== 'test') {
  app.listen(port, () => {
    !nodeEnv && console.log(`Listening on port ${port}`);
  });
  
  setInterval(() => {
    cleanUp(oneHour)
  }, oneHour);
}

export default app;
