exports.config = {
  baseUrl: 'http://127.0.0.1:9000/',
  framework: 'jasmine2',
  specs: [
    'test/e2e/**/*_scenario.js'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', '--test-type=browser'],
      prefs: {
        download: {
          prompt_for_download: false,
          directory_upgrade: true,
          default_directory: '/tmp/e2e/'
        }
      }
    }
  },
  plugins: [
    // {
    //   path: 'node_modules/protractor/plugins/console',
    //   failOnWarning: false,
    //   failOnError: true,
    //   exclude: ['favicon.ico']
    // }
  ],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 360000
  },
  onPrepare: function() {
    console.log("Configure protractor...");

    // Hack to make protractor 2.1 work with angular 2.0.
    patchProtractorWait(browser);

    // configure screenshot reporter
    var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
    jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
      dest: 'reports/e2e/screenshots'
    }));

    // clean downloads before running protractor
    var rimraf = require('rimraf')
    var mkdirp = require('mkdirp')

    rimraf.sync('/tmp/e2e/');
    return mkdirp.sync('/tmp/e2e/');

    console.log("Done configuring protractor! Running tests...");
  }
};

// Disable waiting for Angular because there isn't an integration layer yet.
// TODO: watch https://github.com/angular/angular/blob/master/protractor-shared.js for further development.
function patchProtractorWait(browser) {
  browser.ignoreSynchronization = true;
  var _get = browser.get;
  var sleepInterval = process.env.TRAVIS || process.env.JENKINS_URL ? 7000 : 3000;
  browser.get = function() {
    var result = _get.apply(this, arguments);
    browser.sleep(sleepInterval);
    return result;
  }
}
