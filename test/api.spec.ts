import request from 'supertest';
import http from 'http';
import { startServer } from '../src/app'

const url = (process.env.API_PORT) ? `${process.env.API_HOST}:${process.env.API_PORT}` : `${process.env.API_HOST}`;
let target: http.Server | string;

beforeAll(async () => {
  target = (url !== 'undefined') ? url : await startServer();
});

describe('GET /', () => {
  it('Normal mix of integers', async done => {
    // Given
    const input: number[] = [7,7,11,7,7];
    const query: string = input.join(',');

    request(target)
      .get(`/?input=${query}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({ output: 7.8 })
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

afterAll(async () => {
  if (typeof target != 'string') target.close();
});
