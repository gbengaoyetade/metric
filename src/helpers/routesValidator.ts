import { Request, Response, NextFunction } from 'express';

export const metricsValidator = (req: Request, res: Response, next: NextFunction) => {
  const { key } = req.params;
  const { value } = req.body;

  if (!key.match(/^[a-zA-Z0-9_]+$/)) {
    return res.status(400).json({ error: 'Key must not contain special character aside from underscore' });
  }

  if (!value) {
    return res.status(400).json({ error: "Input is missing 'value' property" });
  }

  if (typeof value !== 'number') {
    return res.status(400).json({ error: 'Value must be a number' });
  }

  next();
};
