// this -> current context
const user = {
    username : "chirag",
    price : 99,
    welcomeMessage : function(){
        //console.log(`${username} , welcome`); // will give error usename undefined
        console.log(`${this.username} , welcome`); // chirag , welcome
    }
}

user.welcomeMessage();

// global object inside browser is window object --> console.log(this)
// global object inside this file is node environment object --> console.log(this)

// arrow functions

const test = function (){ // function expression
    let answer = "50";
    console.log(this.answer); // undefined
    console.log(this); // global object of the node environment
}

const tester = () => { // arrow function (explicity retun where we have to use return statement)
    let answer = "50";
    console.log(this.answer); // undefined
    console.log(this); // {} empty object because of line 24 () => {}
    return answer;
}

test();
tester();

// one difference is that arrow function has empty this object {} whereas normal function will have node environment object


const addtwo = (num1,num2) => num1 + num2 // implicit arrow function 
// in this we dont curly braces and return statement
// but
// we have to add return statement if we use {}

const addthree = (num1,num2,num3) => (num1+num2+num3) // we can also bracket

console.log(addtwo(1,2)); // 3
console.log(addthree(1,2,3)); // 6

// to return an object in arrow function
const myObj = () => ({user:"chirag"});
console.log(myObj());
