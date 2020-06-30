import request from '../helpers/testUtils';
import { cleanUp } from '../helpers/cleanUp';

describe('getMetrics', () => {
  beforeAll((done) => {
    request
      .post('/metric/test_metric')
      .send({ value: 2 })
      .end((err, res) => {
        done();
      })
  });

  afterAll(() => {
    cleanUp(0)
  });

  it('should return 404 when metric is not found', (done) => {
    request
    .get('/metric/some_metric/sum')
    .send()
    .end((err, res) => {
      expect(res.status).toBe(404);
      expect(res.body.error).toBe('Metric not found');
      done();
    });
  });

  it('should return the accurate sum of metrics found', (done) => {
    request
    .get('/metric/test_metric/sum')
    .send()
    .end((err, res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ value: 2 });
      done();
    });
  });
});
