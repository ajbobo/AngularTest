var AngularTestingApp = angular.module("AngularTestingApp");

AngularTestingApp.component("mathTable", {
    templateUrl: 'math-table.template.html',
    controller: function () {
        this.updateTable = function () {
            this.numList = [];
            for (var x = 0; x <= this.maxValue; x++)
                this.numList.push(x);
        };

        this.$onInit = function () {
            this.updateTable()
        };

        this.$onChanges = function (changedObj) {
            this.updateTable();
        }
    },
    bindings: {
        maxValue: '@'
    }
});