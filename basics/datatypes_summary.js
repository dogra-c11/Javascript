// Primitive
// 7 types
// String,Number,Boolean,null,undefined,Symbol,BigInt
// in memory copy of reference is given

// Reference(Non Primitive)
// original reference is given
// Arrays, Objects, Functions
// let myobject= {
//     name : 'chirag'
// };
// let myfunction = function(){
//     console.log('inside function');
// }

// Is Javascript dynamic typed language or statically typed language?

// const number=234234234n; // n at last to make datatype bigInt


// 2 types of memory
// stack (used for primitive datatypes) , heap (used for non premitive datatypes)
// stack - copy of reference so original value will not get updated
// heap - original reference so original value will be updated

// example of stack memory
let first_name = "chiragdogra"
let second_name = first_name;
second_name = "dograchirag"
console.log(first_name); // chiragdogra bcz first name copy was passed to second name
console.log(second_name); // dograchirag

// example of heap memory
let obj1={
    age:24
}
let obj2=obj1;
obj2.age=25;
console.log(obj1); // age : 25 , value updated in obj1 also because of original reference was passed instead of copy
console.log(obj2); // age : 25 


