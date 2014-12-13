chai = require('chai');
chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;

module.exports = expect;