class ErrorHandler {
  constructor($httpProvider) {
    // TODO improve
    $httpProvider.interceptors.push(['$q', '$injector', ($q, $injector) => {
      return {
        responseError: function(response) {
          switch (response.status) {
            case 0:
              console.warn("Backend is off-line");
              $injector.invoke(['$mdToast', function($mdToast) {
                $mdToast.show({
                  template: '<md-toast>Backend is off-line.</md-toast>',
                  hideDelay: 10000,
                  position: 'top right'
                });
              }]);
              break;
            case 400:
              $injector.invoke(['$mdToast', function($mdToast) {
                $mdToast.show({
                  template: '<md-toast>' + response.statusText + '</md-toast>',
                  hideDelay: 2000,
                  position: 'top right'
                });
              }]);
              break;
            default:
              console.warn("TODO implement error handler", response);
          }
          $q.reject(response) 
        }
      };
    }]);
  }
}

angular.module("accounting").config(['$httpProvider', function($httpProvider){
  new ErrorHandler($httpProvider)
}]);