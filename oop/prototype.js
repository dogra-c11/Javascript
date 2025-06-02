// functions , arrays and strings all have superprototypes, which are objects that provide shared properties and methods for all instances of that type.

Object.prototype.test = function() {
    return `[object ${this.constructor.name}]`;
}

// now test method is available on all types of objects

const obj = {};
console.log(obj.test()); // Output: [object Object]

const arr = [];
console.log(arr.test()); // Output: [object Array]

const str = new String('Hello');
console.log(str.test()); // Output: [object String]