// {} is scope

var c = 40;

if(true){ // block scope
    let a = 10;
    const b= 20;
    var c = 30;
}

//console.log(a); // error undefined
//console.log(b); // error undefined
console.log(c); // 30 because c is global scope

// to avoid this issue we dont use var instead use let which has block scope


//nested scope
//child function can access parent function variables

function one(){
    const username="chirag";
    function two(){
        const website="google"
        console.log(username);// no error because username is global scope for two() function so all variable inside one() function will be accessible for two() function
    }
    //console.log(website); // error because website scope is only in two() function
    
    two();
}

one();

// ****************************************************

console.log(addone(5)); // 6 no error as addone can be called before declaration

function addone(num){ // normal declaration
    return num+1;
}

console.log(addtwo(5)); // will give error as we cant call before declaration for function expression

const addtwo = function(num){ // function expression
    return num+2;
}

// this concept is hoisting
