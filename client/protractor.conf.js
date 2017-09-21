let reporters = require('jasmine-reporters');
let HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
let rimraf = require('rimraf');
let mkdirp = require('mkdirp');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

const config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        'window-size=1250,3000',
        'headless', // define DISABLE_HEADLESS for a regular test
        'disable-gpu'
      ],
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
    {
      package: 'protractor-console-plugin',
      failOnWarning: true,
      failOnError: true
    },
    {
      package: 'protractor-console',
      logLevels: ['info', 'warning', 'severe']
    }
  ],
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 360000,
    print: function () {
    }
  },
  useAllAngular2AppRoots: true,
  SELENIUM_PROMISE_MANAGER: false,
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare: function () {
    // kuis voorgaande reports op
    rimraf.sync('reports/e2e/');
    mkdirp.sync('reports/e2e/screenshots');

    // configureer screenshots
    jasmine.getEnv().addReporter(
      new HtmlScreenshotReporter({
        dest: 'reports/e2e/screenshots',
        filename: 'index.html',
        ignoreSkippedSpecs: false,
        reportOnlyFailedSpecs: false,
        captureOnlyFailedSpecs: false
      })
    );

    // configureer junit rapporten
    jasmine.getEnv().addReporter(
      new reporters.JUnitXmlReporter({savePath: 'reports/e2e/', consolidateAll: false})
    );

    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

    // kuis voorgaande downloads op
    rimraf.sync('/tmp/e2e/');
    mkdirp.sync('/tmp/e2e/');

    console.info('Protractor is configured');
  }
};

if (process.env.DISABLE_HEADLESS) {
  config.capabilities.chromeOptions.args.splice(config.capabilities.chromeOptions.args.indexOf('headless'), 1);
}

exports.config = config;
