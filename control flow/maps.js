const map = new Map();
map.set('key1','value1')
map.set('key2','value2')

console.log(map);

// to iterate map using for of loop
// for of loop
for([key,value] of map){
    console.log(`key is ${key} value is ${value}`);
}

// Note: this above method cant be used to iterate a normal object 

const obj = {
    a : "A",
    b : "B"
}

// for([key,value] of obj){ 
//     console.log(`key is ${key} value is ${value}`); // will give error that obj is not iterable
// }


// to iterate an object
//*** For In Loop */

for (key in obj){
    console.log(`key is ${key} value is ${value}`);
}

// NOTE : the above will give error when try to iterate on map


// FOR OF - MAP,ARRAY
// FOR IN - OBJECT

