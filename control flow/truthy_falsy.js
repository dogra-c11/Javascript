// if statement

if (true){//executed

}

if(false){//not executed

}

// Nullish Coalescing Operator(??) when first value is null or undefined
let val1=5 ?? 10;
console.log(val1); // 5
val1=null ?? 10;
console.log(val1); // 10

//Ternary Operator
// condition ? true : false

const price = 100;
price >= 80 ? console.log('greater than 80') : console.log('less than 80');

//  nullish and ternary operator are different

/*
// falsy values
false
0
-0
BigInt 0n
""
null
undefined
NaN
*/

/*
// truthy values
"0"
'false' "false"
" "
[]
{}
function(){}
and anything that is not falsy
*/


