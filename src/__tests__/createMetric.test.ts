import request from 'supertest';
import app from '../app';

const requestObject = request(app);

describe('createMetric', () => {
  it('should return an error when url contains special character', (done) => {
    requestObject
      .post('/metric/ad!')
      .send({ value: 23 })
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Key must not contain special character aside from underscore');
        done();
      });
  });

  it('should return an error when value key is not provided', (done) => {
    requestObject
      .post('/metric/xyz')
      .send({ hello: 34 })
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe("Input is missing 'value' property" )
        done();
      });
  });

  it('should return an error when value key is not provided', (done) => {
    requestObject
      .post('/metric/xyz')
      .send({ value: '34' })
      .end((err, res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Value must be a number')
        done();
      });
  });

  it('should create the metric when all checks pass', (done) => {
    requestObject
      .post('/metric/xyz')
      .send({ value: 34 })
      .end((err, res) => {
        expect(res.status).toBe(201);
        expect(res.body).toEqual({})
        done();
      });
  })
});