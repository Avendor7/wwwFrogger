class Test{

    constructor(public greeting: string) { }
    greet() {
        return console.log(this.greeting);
    }
};

var greeter = new Test("Hello, world!"); 

greeter.greet();