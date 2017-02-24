var AngularTestingApp = angular.module('AngularTestingApp', []);

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

    var kidsValues = ["A.J.", 39, "Will", 38, "Erin", 36, "Emily", 35, "Richard", 33, "Phil", 32];
    $scope.kids = [];
    for (var x = 0; x < kidsValues.length; x += 2) {
        var kid = {
            "name": kidsValues[x],
            "age": kidsValues[x + 1]
        };
        $scope.kids.push(kid);
    }

});