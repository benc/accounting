process.env.PROSHOT_DIR = './reports/e2e/screenshots';
process.env.multi = 'spec=- mocha-proshot=-'

exports.config = {
  specs: ['test/e2e/**/*_scenario.js'],

  framework: 'mocha',

  mochaOpts: {
    reporter: 'mocha-multi',
    timeout: 360000
  }
};