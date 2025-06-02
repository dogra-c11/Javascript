# javascript is prototype based, not class based
# classes are just syntactic sugar for prototypes   

# Pillars of OOP
- Encapsulation
- Abstraction           
- Inheritance
- Polymorphism

# object literal
const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
    };

# 4 parts of OOP
- Contructor function
- Prototype
- Instance (new , this) 
- Class