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
let Name = 'Adam'
const nameUpperCase = Name.toUpperCase()
console.log(nameUpperCase) // output: ADAM

const price = 5.435
 
const priceFixed = price.toFixed(2)

console.log(priceFixed)

/// Usage of parseInt and ParseFloat

const txt = '246.75'
const numInt = parseInt(txt)
const numFloat = parseFloat(txt)

console.log(numInt) /// output: 246.75
console.log(numFloat) /// output: number

// alogrith for choosing highest number from 3 inputed

const number1 = Math.floor(Math.random() * 100)
const number2 = Math.floor(Math.random() * 100)
const number3 = Math.floor(Math.random() * 100)

function CheckWitchBiggest(number1,number2, number3) {
    
}

