// objects can be declared 2 ways - literal and constructor
// singleton- when created from constructor

//const user = {};  // literal
//Object.create()   // constructor

const user = {
    name : "chirag",
    age : 24,
    "logged in" : "delhi"
}

console.log(user.name); // chirag
console.log(user["name"]); // chirag
console.log(user["logged in"]); // cant access using user.logged in

user.greeting = function(){
    console.log('greeting');
    
}

user.greeting2 = function(){
    console.log(`greeting ${this.name}`);
    
}

console.log(user.greeting()); // greeting
console.log(user.greeting2()); // greeting chirag


user.age=25;
Object.freeze(user); // after this we cant update any object value
user.age=26;
console.log(user);// age will be 25 not 26





