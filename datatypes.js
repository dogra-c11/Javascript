"use strict"; // treat all code as newer version ( now it is automatic)

// alert("bankai"); // running this on terminal with nodejs will give error ReferenceError: alert is not defined
// above can be run on browser

console.log(3+3); // we can do arithmetic operation in console log and alert

console.log(3  // does not give error
    +3
)

let name = "Chirag" //string
let age = 24 // number
let isWorking = true // boolean
let state = null // null (empty)

// Premetive datatypes
// number range --> 2 to power 53
// bigint
// string
// boolean
// null --> standalone value , representation of empty value
// undefined --> when value is not defined
// symbol --> unique

// Object

console.log(typeof age); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined
