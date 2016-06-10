var Greeter = (function () {
    function Greeter() {
    }
    // private feedData: Observable<Submission[]>;
    Greeter.prototype.sayHello = function (a) {
        var i = 0;
        for (i = 0; i < a.length; i++) {
            document.write(i + " asdfasdf " + a[i] + "<br/>");
        }
    };
    return Greeter;
}());
function sortByName(a) {
    var res = a.slice(0);
    res.sort(function (x, y) {
        return x.Justin.localeCompare(y.Justin);
    });
    return res;
}
var a = "a";
function test(val) {
    var b = (function (val) { return val + "closure"; });
    return b;
}
test(a);
sortByName([{ Justin: "Joe", age: 42 }]);
var gree = new Greeter();
var myArray = ["toe", "bag", "kid", "space", "gown"];
gree.sayHello(myArray);
