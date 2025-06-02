// we use function call to invoke a function with a specific `this` context
// and to pass arguments to the function

function createUser(name, age,username) {
    this.name = name;
    this.age = age;
    setUsername(username)
}   

function setUsername(username) {
    this.username = username.toLowerCase();
}   

// Using the function call to create a user
const user1 = new createUser('Alice', 25, 'alice'); // Creates a new instance of createUser using the `new` keyword
console.log(user1); // Output: createUser { name: 'Alice', age: 25 }

// as you can see setUsername is not setting the username property on the user1 object because it is not using the `this` context of the user1 object
// to fix this, we can use the `call` method to invoke setUsername with the user1 object as the `this` context

function createUser2(name, age, username) {
    this.name = name;
    this.age = age;
    setUsername2.call(this, username); // Using call to set the username on the current object
}   

function setUsername2(username) {
    this.username = username.toLowerCase();
} 

const user2 = new createUser2('Bob', 30, 'BOB'); // Creates a new instance of createUser2 using the `new` keyword
console.log(user2); // Output: createUser2 { name: 'Bob', age: 30, username: 'bob' }
