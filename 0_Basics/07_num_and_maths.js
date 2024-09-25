const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.7675
console.log(otherNumber.toPrecision(3))

const hundreds = 100000000000
console.log(hundreds.toLocaleString('en-IN'))

// ********************* Maths *******************

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.abs(4))
console.log(Math.round(4.877))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.round(Math.random()*10)+ 1)

const max = 20
const min = 10

console.log(Math.floor(Math.random()*(max-min ))+ min)