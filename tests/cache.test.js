const { spy, expect } = require('chai');
const cache = require('../src/cache');

describe('cache', () => {
  it('should return middleware', () => {
    const middleware = cache();
    expect(typeof middleware).to.be.eql('function');
  });

  it('should work with GET methods only', () => {
    const middleware = cache(() => {}, () => {});
    const next = spy();
    middleware({ method: 'POST' }, {}, next);

    expect(next).to.be.called();
  });

  it('should create different keys for different routes', () => {
    const keys = [];
    const middleware = cache((k) => {
      keys.push(k);
    }, () => {});

    middleware({ method: 'GET', url: '/api/posts/1' }, {}, () => {});
    middleware({ method: 'GET', url: '/api/posts/2' }, {}, () => {});

    expect(keys[0]).to.be.not.eql(keys[1]);
  });

  it('should create same keys for same routes', () => {
    const keys = [];
    const middleware = cache((k) => {
      keys.push(k);
    }, () => {});

    middleware({ method: 'GET', url: '/api/posts/1' }, {}, () => {});
    middleware({ method: 'GET', url: '/api/posts/1' }, {}, () => {});

    expect(keys[0]).to.be.eql(keys[1]);
  });

  it('should send cache when found', () => {
    const middleware = cache(() => 'val', () => {});
    const send = spy();

    middleware({ method: 'GET', url: '/api/posts/1' }, { send }, () => {});

    expect(send).to.have.been.called();
  });

  it('should save cache when not found', () => {
    const save = spy();
    const middleware = cache(() => {}, save);

    let working = false;
    const res = { send: () => { working = true; } };
    middleware({ method: 'GET', url: '/api/posts/1' }, res, () => {});

    res.send();
    expect(save).to.be.called();
    expect(working).to.be.true;
  });
});
