import { Router } from 'express';
import { createMetric, getMetrics } from './routeMethods';

const routes = Router();

routes.post('/:key', createMetric);

routes.get('/:key/sum', getMetrics);

export default routes;
