// dates are calculated from Jan 1 1970 UTC
let myDate = new Date();
console.log(myDate);//current date
console.log(typeof myDate);// object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

let myTimestamp = Date.now();
console.log(myTimestamp); // millisecond value

console.log(myDate.getTime()); // millisecond value

console.log(Math.floor(Date.now()/1000)); // converts into seconds

// always compare dates using timestamps



