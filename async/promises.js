// 
// Promises are used to handle asynchronous operations in JavaScript.
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promises can be in one of three states: pending, fulfilled, or rejected.
// A Promise is created using the `new Promise()` constructor, which takes a function with two parameters: `resolve` and `reject`.
// The `resolve` function is called when the asynchronous operation is successful, and the `reject` function is called when it fails.
// The `then()` method is used to handle the successful completion of a Promise, and it takes a callback function that receives the resolved value.
// The `catch()` method is used to handle errors in a Promise, and it takes a callback function that receives the error.

// This code demonstrates the use of Promises in JavaScript.
const promiseOne = new Promise((resolve, reject) => {   
  setTimeout(() => {
    console.log("Promise One Executed");
    resolve("Promise One Resolved after 1 second"); // it will go to then of promise , we add this to resolve the promise otherwise we will not know that promise is resolved
  }, 1000);
});


const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Two Executed");
    reject("Promise Two Failed after 1 second"); // it will go to catch of promise , we add this to reject the promise otherwise we will not know that promise is resolved
  }, 1000);
});

promiseOne.then((result) => {
  console.log(result);      // Promise One Resolved after 1 second
}); 

promiseTwo.catch((error) => {
  console.error("Error:", error); // this will catch any error in the promise
}); // this will catch any error in the promise

// if we dont add resolve or reject in the promise, it will remain in pending state and will not execute the then or catch block
// so always remember to add resolve or reject in the promise to change its state from pending to fulfilled or rejected

// there is another way to handle promises using async/await syntax instead of then and catch.
// async/await is a way to write asynchronous code in a synchronous manner, making it easier to read and understand.
// async/await is a syntactic sugar over promises that makes it easier to write asynchronous code       

async function executePromises() {
  try {
    const resultOne = await promiseOne; // wait for promiseOne to resolve
    console.log(resultOne); // Promise One Resolved after 1 second

    const resultTwo = await promiseTwo; // wait for promiseTwo to resolve
    console.log(resultTwo); // this will not execute because promiseTwo is rejected
  } catch (error) {
    console.error("Error:", error); // this will catch any error in the promises
  }
}

executePromises(); // call the async function to execute the promises

// A promise's executor runs only when the promise is created, not every time you use .then() or await on it.
// This means that the code inside the executor runs immediately when the promise is created, and the .then() or await will wait for the promise to resolve or reject.