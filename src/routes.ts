import { Router } from 'express';
import { createMetric, getMetrics } from './routeMethods';
import { metricsValidator } from './helpers/routesValidator';

const routes = Router();

routes.post('/:key', metricsValidator, createMetric);

routes.get('/:key/sum', getMetrics);

export default routes;
