angular
    .module('kid-table')
    .component("kidTable", {
        templateUrl: "kid-table/kid-table.template.html", // Or the HTML can be in the "template" field

        controller: function () {
            this.$onInit = function () { // I needed $onInit because this.count didn't seem to be available when the controller function is first called
                var kidsValues = [
                    "A.J.", 39,
                    "Will", 38,
                    "Erin", 36,
                    "Emily", 35,
                    "Richard", 33,
                    "Phil", 32,
                    "Sarah", 38,
                    "Samantha", 38,
                    "James", 36,
                    "Creed", 36,
                    "Jenni", 33,
                    "Katherine", 32];
                var max = (this.count != undefined ? this.count * 2 : kidsValues.length);
                this.kids = [];
                for (var x = 0; x < max; x += 2) {
                    var kid = {
                        "name": kidsValues[x],
                        "age": kidsValues[x + 1]
                    };
                    this.kids.push(kid);
                }
            }
        },

        bindings: {
            count: '@',
            query: '@',
            orderBy: '@'
        }
    });


