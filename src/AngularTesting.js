var AngularTestingApp = angular.module('AngularTestingApp', []); // The [] indicates that a new module is being created

AngularTestingApp.controller('AngularTestingCtrl', function AngularTestingCtrl($scope) {

    // this.updateTable = function () {
    //     this.numList = [];
    //     for (x = 0; x <= this.numCount; x++)
    //         this.numList.push(x);
    // };
    //
    // this.$onInit = function() {
    //     this.updateTable()
    // };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $scope.value = "SomeValue";

    $scope.numCount = 5;
    // $scope.updateTable();

});