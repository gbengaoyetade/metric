import { Request, Response } from 'express';
import { data } from '../data';

export const getMetrics = (req: Request, res: Response) => {
  const { key } = req.params;
  const time = Date.now();
  const oneHour = 20000;

  if (data[key]) {
   const metricValues = data[key].filter((input) => Date.now() - input.time <= oneHour)
    let sum = 0;
    metricValues.forEach((metric) => {
      sum += metric.value
    })
    return res.json({ value: sum })
  }

  return res.status(404).json({ error: 'Metric not found' })
}


export const createMetric = (req: Request, res: Response) => {
  const { key } = req.params;
  const { value } = req.body;

  const time = Date.now();

  if (data[key]) {
    data[key].push({ value, time })
  } else {
     data[key] = [{ value, time }]
  }

  console.log({...data})
  res.json({})
};