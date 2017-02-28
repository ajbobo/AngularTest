angular
    .module("show-text")
    .component("showText", {
    template: "<div style='background: lightgray; border-style:dashed;'><p>This is a component with text: <b>{{$ctrl.inputText}}</b></p></div>",
    controller: function () {
    },
    bindings: {
        inputText: '@'
    }
});