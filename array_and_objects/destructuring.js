//destructure object
const ojb = {
    name : "chirag",
    age : 25,
    fullame : {
        firstname: "cd",
        lastname : "dogra"
    }
}

const {name,age} = ojb; 
console.log(age); // 25

// rest operator

function test(...data){
    console.log(data);
}
test(1,"hello");  // [1,'hello']

// what is the difference between rest and spread?