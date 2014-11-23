module.exports = function(config) {
  return config.set({
    basePath: "../",
    frameworks: ['jasmine', 'traceur'],
    files: [
      "app/bower_components/traceur-runtime/traceur-runtime.js",
      "app/bower_components/es6-module-loader/dist/es6-module-loader.js",
      "app/bower_components/system.js/dist/system.js",
      "app/bower_components/jquery/dist/jquery.js",
      "app/bower_components/angular/angular.js",
      "app/bower_components/json3/lib/json3.js",
      "app/bower_components/angular-resource/angular-resource.js",
      "app/bower_components/angular-sanitize/angular-sanitize.js",
      "app/bower_components/angular-ui-router/release/angular-ui-router.js",
      "app/bower_components/lodash/dist/lodash.compat.js",
      "app/bower_components/angular-animate/angular-animate.js",
      "app/bower_components/angular-aria/angular-aria.js",
      "app/bower_components/hammerjs/hammer.js",
      "app/bower_components/angular-material/angular-material.js",
      "app/src/app.js", 
      "app/src/**/*.js", 
      "test/spec/**/*.js",
      "test/test-main.js"
    ],
    preprocessors: {
      "app/src/**/*.js": "traceur",
      "app/src/**/*.html": "ng-html2js" // TODO improve!!!
    },
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    captureTimeout: 60000,
    singleRun: false,
    junitReporter: {
      outputFile: "reports/karma/karma-junit.xml",
      suite: "unit"
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/src/',
      moduleName: 'accounting'
    }
  });
};

