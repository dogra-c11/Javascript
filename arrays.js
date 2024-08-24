const myArray= [0,1,2,3,4,5];
// difference between shallow copy and deep copy -> array is shallow copied

console.log(myArray.length);

// Array Methods

myArray.push(6); // 6 added at end of array
console.log(myArray); 
myArray.pop() // removes last element of array
console.log(myArray); // 6 is removed

myArray.unshift(6); // add in beginning of array
console.log(myArray); // 6 is added in beginning of array
myArray.shift() // removes first element of array
console.log(myArray); // 6 is removed

const newArray=myArray.join();
console.log(newArray);// converts myarray into string 

// slice and splice

console.log('original array is ',myArray);

const sliceArray=myArray.slice(1,3); // get the array values from index 1 to index 2 (3 is not included)
console.log('slice array ',sliceArray);// [1,2]

console.log('original array is ',myArray); // [0,1,2,3,4,5]

const spliceArray=myArray.splice(1,3); // get the array values from index 1 to index 3 (3 is also included)
console.log('splice array ',spliceArray);// [1,2,3]

console.log('original array is ',myArray); // [0,4,5]

// Splice also removes the values from the original array whereas slice does not




