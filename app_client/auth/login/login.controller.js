(function() {

  angular
    .module('meanApp')
    .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['$scope', '$location', 'authentication'];

  function loginCtrl($scope, $location, authentication) {
    var vm = this;

    if (authentication.isLoggedIn()) {
      $location.path('profile');
      return;
    }

    vm.credentials = {
      email: "",
      password: ""
    };

    $scope.error = "";

    vm.onSubmit = function() {
      authentication
        .login(vm.credentials)
        .error(function(err) {
          $scope.error = err.message;
        })
        .then(function() {
          $scope.error = "";
          $location.path('profile');
        });
    };

  }

})();