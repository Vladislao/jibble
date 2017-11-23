const { expect, request } = require('chai');
// const casual = require('casual');
const app = require('../../src/app');

describe('/collection', function posts() {
  this.timeout(10000);

  it('GET should return 200 and 30 aggregated items', async () => {
    const response = await request(app)
      .get('/api/collection/')
      .set('Authorization', 'Bearer af24353tdsfw');

    expect(response).to.have.status(200);
    expect(response.body).to.be.not.empty;
    expect(response.body.length).to.be.eql(30);

    expect(response.body[0]).to.have.property('user');
    expect(response.body[0]).to.have.property('album');
    expect(response.body[0]).to.have.property('post');
  });
});
