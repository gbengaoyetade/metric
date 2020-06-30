import request from 'supertest';
import app from '../app';

const requestObject = request(app);


export default requestObject;