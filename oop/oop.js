const obj = {
  name: 'John',
  age: 30,
  greet: function() {    
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // this refers to the object itself
  }  ,
  greeting: () => {   
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // this refers to the global object, not the object itself
  }   
};

// Using the object
obj.greet(); // Output: Hello, my name is John and I am 30 years old.
obj.greeting(); // Output: Hello, my name is undefined and I am undefined years old.


// Contructor function

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}

// Using the constructor function
const person1 = new Person('Alice', 25);    // Creates a new instance of Person using the `new` keyword
const person2 = new Person('Bob', 35);      // Creates another instance of Person using the `new` keyword
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 35 years old.

console.log(person1 instanceof Person); // Output: true
// if we don't use the `new` keyword, `this` will refer to the global object (or undefined in strict mode)

function PersonWithoutNew(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}   

const person3 = PersonWithoutNew('Charlie', 40); // No `new` keyword, `this` refers to the global object
//person3.greet(); // Output: Hello, my name is Charlie and I am 40 years old. (if not in strict mode, otherwise it will throw an error)
// In strict mode, `this` will be undefined if we don't use the `new` keyword
// 'use strict';

