let score = "221fsgsbfg"
// let score = null
// let score = undefined
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)   // This is will give NaN 

// "33" => 33
// "33abdc" => NaN
// true => 1   false => 0

let isLoggedIn = 1
// let isLoggedIn = "1efgsf"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true   0 => false
// "hot" => 1   "" => false

let someNumber = 33
let stringInNum = String(someNumber)
console.log(stringInNum);

let bool = true
let boolinString = String(bool)
console.log(typeof boolinString)
console.log(boolinString)

console.log("")
console.log("")
console.log("")
console.log("")


/*********************************Operations**************************************/

let val = 45
let negVal = -val
console.log(negVal)

// console.log(2+2)
// console.log(2*2)
// console.log(2-2)
// console.log(2/2)
// console.log(3%2)
// console.log(2**4) //2 ki power 4

let s1 = "hello "
let s2 = "john"
let s3 = s1 + s2;
console.log(s3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")

// console.log("2" + 1 + 2)
// console.log(2 + 1 + "4")

// console.log(2 + 3 * 5 % 3)  //Avoid writting this type of codes
// console.log(+true)
// console.log(true+)
// console.log(+"")

let gameCounter = 100
++gameCounter
gameCounter++
console.log(gameCounter)

