class user{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get userName() {
        return this.name.toUpperCase();
    }

    set userName(newName) {
        this.name = newName;
    }

    get userAge() {
        return this.age;
    }

    set userAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        } else {
            console.log("Please enter a valid age.");
        }
    }
}

// getter and setter both should be used with the same name and should be defined in the same class.

// Example usage
const user1 = new user("Alice", 30);
console.log(user1.userName); // Output: ALICE
user1.userName = "Bob";
console.log(user1.userName); // Output: BOB
console.log(user1.userAge); // Output: 30
user1.userAge = 25;     
console.log(user1.userAge); // Output: 25
user1.userAge = -5; // Output: Please enter a valid age.
console.log(user1.userAge); // Output: 25 (remains unchanged)