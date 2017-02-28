angular
    .module('AngularTestingApp', ['kid-table', 'math-table', 'number-input', 'show-text']) // Include the names of modules this is dependant on
    .controller('AngularTestingCtrl', function AngularTestingCtrl($scope) {

        $scope.kidQuery = "";
        $scope.value = "SomeValue";
        $scope.numCount = 5;

    });