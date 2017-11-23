const { spy, expect } = require('chai');
const throttle = require('../src/throttle');

describe('throttle', () => {
  it('should return middleware', () => {
    const middleware = throttle();
    expect(typeof middleware).to.be.eql('function');
  });

  it('should call next if throttling is not required', () => {
    const middleware = throttle(() => false);
    const next = spy();
    middleware({}, {}, next);

    expect(next).to.be.called();
  });

  it('should return 429 if throttling is required', () => {
    const middleware = throttle(() => true);

    const res = { status: spy(() => res), end: () => {} };
    middleware({}, res, () => {});

    expect(res.status).to.be.called();
  });
});
