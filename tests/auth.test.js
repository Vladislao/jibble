const { expect, request } = require('chai');
const app = require('../src/app');

describe('authorize', () => {
  it('should return 501 when Authorization header is not set', async () => {
    const response = await request(app)
      .get('/api/');
    expect(response).to.have.status(501);
  });
  it('should return 501 when Authorization header is not valid', async () => {
    const response = await request(app)
      .get('/api/')
      .set('Authorization', 'Bearer falsy');
    expect(response).to.have.status(501);
  });
});
