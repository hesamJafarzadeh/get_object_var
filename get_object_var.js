/**
* Get Object Attributes
* @params {object} obj
*/
function get_object_vars (obj) {
    var attributes = {}, property = '';  
  
    for (property in obj) {  
        if (typeof obj[property] !== 'function' && property !== 'prototype') {  
           attributes[property] = obj[property];  
        }  
    }  
    return attributes;
}  


var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");

console.log(get_object_vars(greeter));

console.log(get_object_vars({
	name:'John',
	wifeName:'Doe'
}));
