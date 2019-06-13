/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/global Object Binding
* 2. Implicit binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding

var friend = {
    firstName: "Elyssia",
    sayHi: function(){
        return this.firstName + " says hello!";
    }
};

// Principle 3

// code example for New Binding

var CreateCar = function (){
    this.color = "black";
    this.brand = "tesla";
};

CreateCar.prototype.autopilot = function (speed){
    console.log("Automatically driving at " + speed + " miles per hour")
}

var car = new CreateCar();

car.autopilot();

// Principle 4

// code example for Explicit Binding

var obj = {num:2};

var addToThis = function(a){
    return this.num + a;
};

addToThis.call(obj,3);

