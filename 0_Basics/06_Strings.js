 let name = "Nidhi"
 let repoCount = 10
 // string interpolation
 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
// new way to make a string 
const gameName = new String("Nidhi hc com list")
console.log(gameName[2])
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
//substring
const newString = gameName.substring(0,2)
console.log(newString)
//slice
const anotherString = gameName.slice(-8,4)
console.log(anotherString)
//trim
const newOne = "  nidhi   "
console.log(newOne);
console.log(newOne.trim());
//replace
const url = "https://nidhi.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
// includes
console.log(url.includes('hitesh'))
//split
console.log(gameName.split('-'))