const accountId = 1;
let accountEmail = "chirag@gmail.com";
var accountPassword="1234";
accountCity="London";
let accountState; // it is undefined

// accountId=2;  // not allowed

accountEmail = "dogra@gmail.com";
accountPassword = "7890";
accountCity="Paris"

// prefer not to use var because of issue in block scope and functional scope

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);