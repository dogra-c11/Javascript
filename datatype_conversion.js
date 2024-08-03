let score = 99
console.log(typeof score) // number

score = "99"
console.log(typeof score) // string

let valueInNumber = Number(score) // convert into number
console.log(typeof valueInNumber) // number

score = "99abc"
valueInNumber = Number(score) // convert into number
console.log(typeof valueInNumber) // number ---> why ????
//because
console.log(valueInNumber); // NaN --> typeof NaN is number

score = null
valueInNumber = Number(score) // convert into number
console.log(typeof valueInNumber) // number ---> why ????
//because
console.log(valueInNumber); // 0 --> typeof 0 is number

score = undefined
valueInNumber = Number(score) // convert into number
console.log(typeof valueInNumber) // NaN ---> why ????
//because
console.log(valueInNumber); // NaN --> typeof Nan is number

score = true
valueInNumber = Number(score) // convert into number
console.log(typeof valueInNumber) // number ---> why ????
//because
console.log(valueInNumber); // 1 --> typeof 1 is number

// in short the results are
// Number conversion
// "33" = 33
// "33abc" = NaN
// true = 1 false = 0

// Boolean conversion
// 1 = true 0 = false
// "" = false
// "chirag" = true
