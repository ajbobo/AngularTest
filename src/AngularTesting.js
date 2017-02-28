var AngularTestingApp = angular.module('AngularTestingApp', []); // The [] indicates that a new module is being created

AngularTestingApp.controller('AngularTestingCtrl', function AngularTestingCtrl($scope) {

    $scope.value = "SomeValue";
    $scope.numCount = 5;

});