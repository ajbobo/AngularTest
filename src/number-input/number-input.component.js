angular
    .module("number-input")
    .component("numberInput", {
    templateUrl: "number-input/number-input.template.html",
    controller: function () {
        this.numValue = 2;

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