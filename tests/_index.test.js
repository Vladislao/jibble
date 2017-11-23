const chai = require('chai');
const http = require('chai-http');
const spies = require('chai-spies');

chai.use(spies);
chai.use(http);
const { expect } = chai;

it('tests should work', () => {
  expect(true).to.be.true;
});
