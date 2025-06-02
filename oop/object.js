// everything is an object in JavaScript

// Object literals, constructor functions, and classes are all ways to create objects in JavaScript

function User() {
    this.name = 'John';
    this.age = 30;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

console.log(User.prototype); // Output: User {}
User.country = 'USA'; // Adding a property to the User function itself
console.log(User.country); // Output: USA   
// we can even add properties to the User function itself, not just its prototype

// we can add a function to the User prototype
User.prototype.getDetails = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
}   
// Adding a method to the User prototype
const user1 = new User(); // Creating an instance of User       
console.log(user1.getDetails());

// if we didnt use the `new` keyword, `this` would refer to the global object (or undefined in strict mode)
// so user1 would not have the `name` and `age` properties
const user2 = User(); // No `new` keyword, `this` refers to the global object   
// console.log(user2.getDetails()); // This will throw an error because `user2` is undefined

// so we should always use the `new` keyword when tryin
