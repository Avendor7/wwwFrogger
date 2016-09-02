var Test = (function () {
    function Test(greeting) {
        this.greeting = greeting;
    }
    Test.prototype.greet = function () {
        return console.log(this.greeting);
    };
    return Test;
}());
;
var greeter = new Test("Hello, world!");
greeter.greet();
