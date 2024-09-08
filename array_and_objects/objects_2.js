// const obj = new Object(); // singleton object
const obj = {}; // non singleton - literal object

obj.id='123abc';
obj.name='chirag';

console.log(obj);

const obj2={
    email : 'abcd@abcd.com',
    fullname : {
        userfullname : {
            firstname : "chirag",
            lastname : "dogra"
        }
    }
}

console.log(obj2.fullname.userfullname.lastname); // dogra

const obj3 = Object.assign({},obj,obj2); // combines both objects and return one object with all the keys of the 2 objects with respective values
console.log(obj3);

const obj3_3={...obj,...obj2}; // spread operator works the same as assign
console.log(obj3_3); // same result as line22

// we use spread mostly ---

const obj4={obj,obj2}; // obj and obj2 are stored as an object not spreaded
console.log(obj4);

console.log(Object.keys(obj)); // return array of all keys of the object
console.log(Object.values(obj)); // return array of all values of the object




