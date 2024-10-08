// Primitive
/**
 * 7 types : String , Number , Boolean, null , undefined, Symbol
 * BigInt
 */

// Javascript is Dynamically Typed Language


const score = 3;
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId);
console.log(typeof Id)

const bigNumber = 3948643762376329n
console.log(typeof bigNumber)
//console.log(typeof bigNumber)

/**
 * Reference Type [Non primitive]
 * Array Objects functions
 * 
 */
const heros = ["Batman","Superman","Ironman"]
console.log(heros[2])
let myObj1 ={
    name : "nidhi",
    age : '21'
}
console.log(myObj1.name);

const myfunction = function(){
console.log("My function");
}


// Stack Memory(Primitive) and Heap Memory(Non-primitive)
let myName = "Nidhi"

let myOtherName = myName
myOtherName = "Nidheee"
console.log(myOtherName) // Nidheee
console.log(myName) // Nidhi

let userOne ={
    email : "abc@gmail.com",
     upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "fgh@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
