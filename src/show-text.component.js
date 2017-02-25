var AngularTestingApp = angular.module("AngularTestingApp");

AngularTestingApp.component("showText", {
    template: '<p>This is a component with text: <b>{{$ctrl.inputText}}</b></p>',
    controller: function () {
    },
    bindings: {
        inputText: '@'
    }
});