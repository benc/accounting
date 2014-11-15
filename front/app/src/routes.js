angular.module("accounting").config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
});