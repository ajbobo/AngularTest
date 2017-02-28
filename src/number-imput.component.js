var AngularTestingApp = angular.module("AngularTestingApp");

AngularTestingApp.component("numberInput", {
    templateUrl: 'number-input.template.html',
    controller: function () {
        this.numValue = 0;
    },
    bindings: {
        minValue: '@',
        maxValue: '@'
    }
});