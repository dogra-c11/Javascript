const a = ['a','b','c'];
const b=['c','d','e'];

// a.push(b);
// console.log(a); // b is added as an array on index 4

const d = a.concat(b); // similar to push but return new array instead of adding on same array also it will not add full array as a value instead all values of array will add to d
console.log(d);

//spread 
const e = [...a,...b]; // works same as concat all elements are added in the array individually
console.log(e);//[a,b,c,c,d,e]

const f = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const g = f.flat(Infinity); // all values inside of arrays will be added as values
//Infinity when you dont know the depth

console.log(g);//[1,2,3,4,5,6,7,6,7,4,5]

//check some array functions like Array.of() , Array.from()



