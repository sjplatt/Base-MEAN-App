(function() {

  angular
    .module('meanApp')
    .controller('registerCtrl', registerCtrl);

  registerCtrl.$inject = ['$scope', '$location', 'authentication'];

  function registerCtrl($scope, $location, authentication) {
    var vm = this;

    if (authentication.isLoggedIn()) {
      $location.path('profile');
      return;
    }

    vm.credentials = {
      name: "",
      email: "",
      password: ""
    };

    $scope.error = "";

    vm.onSubmit = function() {
      console.log('Submitting registration');
      authentication
        .register(vm.credentials)
        .error(function(err) {
          $scope.error = "Duplicate email " + err.op.email;
        })
        .then(function() {
          $scope.error = "";
          $location.path('profile');
        });
    };

  }

})();