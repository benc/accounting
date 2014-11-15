angular.module('accounting').config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'src/home/home.html',
    meta: {
      pageTitle: 'Accounting'
    }
  });
});