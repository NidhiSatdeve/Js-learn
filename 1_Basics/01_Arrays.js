//array
const myArr = [0,1,2,3,4,5]
const myHeroe = ["ironman","batman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//Array methods

myArr.push(6)
console.log(myArr)

myArr.unshift(9)
myArr2.shift()
console.log(myArr);
console.log(myArr2);

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)

//slice splice
console.log("A", myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.group("C",myArr)
console.log(myn2)