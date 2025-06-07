const user = {
    name: 'Alice',      
    age: 25,
    setUsername: function(username) {
        this.username = username.toLowerCase();
    }
};

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// Output: { value: 'Alice', writable: true, enumerable: true, configurable: true }

Object.defineProperty(user, 'age', { writable: false });
console.log(Object.getOwnPropertyDescriptor(user, 'age'));
// Output: { value: 25, writable: false, enumerable: true, configurable: true }

user.age = 30; // This will not change the age property because it is not writable
console.log(user.age); // Output: 25    