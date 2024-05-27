// Arrays part 2
const marvelHeroes = ["thor", "spiderman", "ironman"]
const dcHeroes = ["batman", "flash", "superman"]

// marvelHeroes.push(dcHeroes)   // Push array into an array and array can be taken as a single data
// console.log(marvelHeroes) 
// console.log(marvelHeroes[3])

const combinedHeroes = marvelHeroes.concat(dcHeroes)   // concat returns a new array
console.log(combinedHeroes)

// spread operator
const allNewHeroes = [...marvelHeroes, ...dcHeroes]
console.log(allNewHeroes)

const anotherArr = [1, 3, 4, [2,5,7], 7, [6, 4, [8,9]]]
const realanotherArr = anotherArr.flat(2)    // by default it takes 1 value inside flat()
console.log(realanotherArr)


// Used in datascraping
console.log(Array.isArray("Hitler"))
console.log(Array.from("Hitler"))  // Can't convert the object data into array without telling that we have to make array with key or values

let score1 = 134
let score2 = 432
let score3 = 342

console.log(Array.of(score1, score2, score3))
