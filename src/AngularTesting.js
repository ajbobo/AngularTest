var AngularTestingApp = angular.module('AngularTestingApp', []); // The [] indicates that a new module is being created

AngularTestingApp.controller('AngularTestingCtrl', function AngularTestingCtrl($scope) {

    $scope.updateTable = function () {
        $scope.numList = [];
        for (x = 0; x <= $scope.numCount; x++)
            $scope.numList.push(x);
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $scope.value = "SomeValue";

    $scope.numCount = 5;
    $scope.updateTable();

});