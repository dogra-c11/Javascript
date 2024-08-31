// Immediately invoked function expression (IIFE)

// function which are execute immediately
//use case - db connection which should be done immediately

// syntax ()()

(function test(){
    console.log('db connected');
})();

// used to remove the problem of global scope variables

// important to add semi colon in iife because javascript will not know when to end the function

( (dbname) => { console.log(`db connected by ${dbname}`)})('mysql'); // we can use arrow function and also pass arguments like this in iife

