var AngularTestingApp = angular.module("AngularTestingApp");

AngularTestingApp.component("numberInput", {
    templateUrl: 'number-input.template.html',
    controller: function () {
        this.numValue = 0;

        this.$onInit = function() {
            if (this.onSetValue) // Don't call it before it has been bound
                this.onSetValue({outNum: this.numValue});
        }
    },
    bindings: {
        minValue: '@',
        maxValue: '@',
        onSetValue: '&' // Output callback
    }
});