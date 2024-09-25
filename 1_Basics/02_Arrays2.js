const marvel_hero = ["ironman","thor","spiderman"]
const dc_hero = ["flash","superman","batman"]
//marvel_hero.push(dc_hero)
const newHero = marvel_hero.concat(dc_hero)
console.log(newHero);

//spread operator
const allNewHero = [...marvel_hero, ...dc_hero]
console.log(allNewHero)

//flat
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Nidhi"))
console.log(Array.from("Nidhi"))
console.log(Array.from({name: "Nidhi"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))