const { expect, request } = require('chai');
const casual = require('casual');
const app = require('../../src/app');

describe('/posts', function posts() {
  this.timeout(10000);

  it('GET should return 200 and list of posts', async () => {
    const response = await request(app)
      .get('/api/posts/')
      .set('Authorization', 'Bearer af24353tdsfw');

    expect(response).to.have.status(200);
    expect(response.body).to.be.not.empty;
  });

  it('GET should return 200 and one post', async () => {
    const response = await request(app)
      .get('/api/posts/1')
      .set('Authorization', 'Bearer af24353tdsfw');

    expect(response).to.have.status(200);
    expect(response.body.id).to.be.eql(1);
  });

  it('POST should return 201 and new post', async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({
        userId: casual.integer(1, 10),
        title: casual.title,
        body: casual.text,
      })
      .set('Authorization', 'Bearer af24353tdsfw');

    expect(response).to.have.status(201);
    expect(response.body.id).to.be.not.undefined;
  });

  it('PUT should return 200 and updated post', async () => {
    const id = casual.integer(1, 10);
    const response = await request(app)
      .put(`/api/posts/${id}`)
      .send({
        userId: casual.integer(1, 10),
        title: casual.title,
        body: casual.text,
      })
      .set('Authorization', 'Bearer af24353tdsfw');

    expect(response).to.have.status(200);
    expect(response.body.id).to.be.eql(id);
  });

  it('PATCH should return 200 and updated post', async () => {
    const id = casual.integer(1, 10);
    const response = await request(app)
      .patch(`/api/posts/${id}`)
      .send({
        title: casual.title,
      })
      .set('Authorization', 'Bearer af24353tdsfw');

    expect(response).to.have.status(200);
    expect(response.body.id).to.be.eql(id);
  });

  it('DELETE should return 200', async () => {
    const id = casual.integer(1, 10);
    const response = await request(app)
      .delete(`/api/posts/${id}`)
      .set('Authorization', 'Bearer af24353tdsfw');

    expect(response).to.have.status(200);
  });
});
