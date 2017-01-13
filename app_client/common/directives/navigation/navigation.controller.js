(function() {

    angular
        .module('meanApp')
        .controller('navigationCtrl', navigationCtrl);

    navigationCtrl.$inject = ['$scope', '$location', 'authentication'];

    function navigationCtrl($scope, $location, authentication) {
        var vm = this;

        vm.isLoggedIn = authentication.isLoggedIn();
        vm.currentUser = authentication.currentUser();

        $scope.logout = function() {
            authentication.logout();
            vm.isLoggedIn = authentication.isLoggedIn();
            vm.currentUser = authentication.currentUser();
        };
    }

})();