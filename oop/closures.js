function test() {
  var a = 1;
  function inner() {
    console.log(a);
  }
  return inner;
}   

// Explanation: The variable 'a' is defined in the outer function 'test', and it is accessible within the inner function 'inner' due to lexical scoping.
// The inner function retains access to the variable 'a' even after 'test' has finished executing, creating a closure.

const closureFunction = test();
closureFunction(); // Output: 1 

// Explanation: When 'test' is called, it returns the inner function 'inner', which has access to the variable 'a'.
// When 'closureFunction' is called, it executes 'inner', which logs the value of 'a' (1) to the console.

// This demonstrates how closures work in JavaScript, allowing inner functions to access variables from their outer scope even after the outer function has completed execution.
// Closures are a powerful feature in JavaScript that allow functions to maintain access to their lexical scope, even when they are executed outside of that scope.

// when inner function is returned from the outer function, the scope of outer function is also returned with it so now it retains access to the variables of the outer function, creating a closure.

