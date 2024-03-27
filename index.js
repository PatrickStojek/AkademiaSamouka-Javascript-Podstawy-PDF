//Typowanie dynamiczne

const basketFloat1 = 2785.12;
const basketFloat2 = 451.88
const basketInteger = 4791

const sum =  basketFloat1 + basketFloat2 + basketInteger

const avg = sum / 3

//checking the the type of variable

let arr = [];
const arrType = typeof arr;
console.log(arrType) // output: object

const fn  = function() {
}

const fnType = typeof fn
console.log(fnType); /// output: function

/// Javascript enrooted error

let myVar =  null
let myObj = {}

console.log(typeof myVar === 'object') // output: true


// toUpperCase() function and toFixed()
const name = Adam
const nameUpperCase = Adam.toUpperCase()
console.log(nameUpperCase) // output: ADAM

const price = 5.435
 
const priceFixed = price.toFixed(2)

console.log(priceFixed)