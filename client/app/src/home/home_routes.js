angular.module('accounting').config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    views: {
      'content@': {
        templateUrl: 'home/home.html'
      }
    },
    meta: {
      pageTitle: 'Accounting'
    }
  });
});