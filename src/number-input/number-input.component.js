angular
    .module("number-input")
    .component("numberInput", {
        templateUrl: "number-input/number-input.template.html",
        controller: function () {
            this.numValue = 2;

            this.$onInit = function () {
                this.numValue = this.minValue; // This works with two-way bindings, but NOT with string bindings

                if (this.onSetValue) // Don't call it before it has been bound
                    this.onSetValue({outNum: this.numValue});
            };
        },
        bindings: {
            minValue: '=',
            maxValue: '@',
            onSetValue: '&' // Output callback
        }
    });