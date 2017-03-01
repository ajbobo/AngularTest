angular
    .module("show-text")
    .component("showText", {
        template: "<div style='background: lightgray; border:1px dashed;'><p>{{$ctrl.displayText + ' '}}<b>{{$ctrl.inputText}}</b></p></div>",
        controller: function () {
            this.$onInit = function() {
                if (this.displayText == undefined)
                    this.displayText = "This is a component with text:"
            }
        },
        bindings: {
            inputText: '@',
            displayText: '@'
        }
    });