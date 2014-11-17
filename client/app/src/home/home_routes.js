angular.module('accounting').config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home/home.html',
    meta: {
      pageTitle: 'Accounting'
    }
  });
});