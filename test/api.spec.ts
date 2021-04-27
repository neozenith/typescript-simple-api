import request from 'supertest';
import { startServer } from '../src/app'

const url = (process.env.API_PORT) ? `${process.env.API_HOST}:${process.env.API_PORT}` : `${process.env.API_HOST}`;

describe('GET /', () => {
  it('Normal mix of integers', async done => {
    // Given
    const input: number[] = [1,2,3,4,5];
    const query: string = input.join(',');
    const target = (url !== 'undefined') ? url : await startServer();
    console.log({ target });

    request(target)
      .get(`/?input=${query}`)
      // .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
