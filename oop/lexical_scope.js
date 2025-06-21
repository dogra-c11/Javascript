function test() {
  let a = 1;
  function inner() {
    console.log(a);
  }
  inner();
}

test(); // Output: 1
// Explanation: The variable 'a' is defined in the outer function 'test', and it is accessible within the inner function 'inner' due to lexical scoping.

// function inside a function can access variables defined in the outer function's scope, which is known as lexical scoping. This means that the inner function retains access to the variables of its parent function even after the parent function has finished executing.
// This is a fundamental concept in JavaScript, allowing for closures and encapsulation of variables.

