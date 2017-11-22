const { expect, request } = require('chai');
const app = require('../src/app');

describe('server', () => {
  it('should return 404', async () => {
    const response = await request(app)
      .get('/notfound');
    expect(response).to.have.status(404);
  });
});
