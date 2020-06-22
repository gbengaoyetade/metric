import { Request, Response } from 'express';
import { data } from '../data';
import { oneHour } from './helpers/constants';

export const getMetrics = (req: Request, res: Response) => {
  const { key } = req.params;
  const time = Date.now();


  const metricValues = data.filter((input) => input.key === key && Date.now() - input.time <= oneHour);

  if (metricValues.length) {
    let sum = 0;
    metricValues.forEach((metric) => {
      sum += metric.value;
    });
    return res.json({ value: sum });
  }

  return res.status(404).json({ error: 'Metric not found' });
};

export const createMetric = (req: Request, res: Response) => {
  const { key } = req.params;
  const { value } = req.body;

  const time = Date.now();

  data.push({ value, time, key });

  res.status(201).json({});
};
