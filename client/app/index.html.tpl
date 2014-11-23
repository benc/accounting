<!doctype html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- bower:css -->
    <!-- endbower -->
    <link rel="stylesheet" href="styles/main.css" />
</head>
<body>

<nav layout="horizontal" role="navigation">
  <div>
    <a class="brand" ui-sref="home">Accounting</a>
  </div>
  <div flex></div>
  <div >
    <ul layout="horizontal">
      <li><a ui-sref="invoices">Invoices</a></li>
    </ul>
  </div>
</nav>
<div layout="horizontal" class="content">
  <div flex>
    <div ui-view="content"></div>
  </div>
</div>

<script src="bower_components/traceur-runtime/traceur-runtime.js"></script>
<script src="bower_components/es6-module-loader/dist/es6-module-loader.js"></script>
<script src="bower_components/system.js/dist/system.js"></script>
<!-- bower:js -->
<!-- endbower -->

<script type="text/javascript">
  // first, init angular module
  System.import("./src/app").then(function(){
    // then, load templates compiled by gulp-ng-html2js
    System.import("./src/templates");

    // and load our app
    System.import("./src/accounting").then(function(){
      angular.element(document).ready(function() {
        angular.bootstrap(document, ['accounting']);
      });
    }).catch(console.error.bind(console));
  });
</script>
</body>
</html>
