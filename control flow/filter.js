const arr = [1,2,3,4,5,6,7];

const filter_arr=arr.filter( (num) => num >5);
// return value which pass the condition ie greater than 5

console.log(filter_arr);  // [6,7]

const filter_arr2=arr.filter( (num) => {num >5});

console.log(filter_arr2);  // [] because in arror function when we use curly brackets a scope is started so then we need to explicity return

const filter_arr3=arr.filter( (num) => {return num >5});

console.log(filter_arr3);  // [6,7] because we used explicit return

