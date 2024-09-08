const arr = [1,2,3,4,5,6,7,8];

// add 10 to all values of array 
// we will use map function

const mapped_arr = arr.map((num) => num +10 );
console.log(mapped_arr); // [11,21,....]

// we can chain functions

const chained_arr = arr.map((num) => num + 10).filter((num) => num > 15);
console.log(chained_arr); // [16,17,18]

// reduce function

const nums = [1,2,3];

// to add all values of nums array we can use reduce

const total = nums.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
},0) // 0 is initital value which will be starting value of accumulator

console.log(total);  // 6

// use case of reduce is shopping cart




