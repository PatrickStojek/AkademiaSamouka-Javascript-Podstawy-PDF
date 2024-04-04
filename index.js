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

function CheckWhichBiggest(number1,number2, number3) {
    if(number1 > number2 && number1 > number3) {
        console.log(`${number1} is the biggest number`)
    }  else if(number2 > number3){
        console.log(`{number2} is the biggest number`)
    } else {
        console.log(`{number3} is the biggest number `)
    }
}

console.log('a' > 'A') // output: true  a=> 97, A => 65


// example of age verification

const userAge = prompt('Ile masz lat?', 0);
const userAgeInt = parseInt(userAge);

if(userAgeInt < 18) {
    const leftAge = 18 - userAge
    alert(`You have ${leftAge} years left to reaching legal age`)
} else alert("Congratulations you are an adult!") 

function isNumberEven(number1, number2) {
   const isNumberEven = !(number1 % 2) && !(number2 % 2) ? 'yes' : 'no';
    console.log(isNumberEven)
}

/* shorter version of checking wheter a number is even */
const isEven = a % 2 === 0 ? 'true' : 'false';
const isEvenShorterNotation = a % 2 === 0;


