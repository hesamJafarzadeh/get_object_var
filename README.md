# get_object_var

Gets the properties of the given object


# Usage
Download get_object_var function and pass object to get_object_var and Gets the properties of the given object.

```sh
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
```

#### This Method in PHP

See [get_object_vars](https://www.php.net/manual/en/function.get-object-vars.php)


### Todos
 - check static properties

License
----

MIT
