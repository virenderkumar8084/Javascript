// These are basic comparison in js no problem in these comparisons and result will be in terms of true or false
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 == 1)
// console.log(2 != 1)

// Problem arises when you compare two values with different datatypes

console.log("2" > 1)
console.log("02" > 1)

// Results are not predictable Conversion can't predicted 
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined < 0)

// Strict Check ===

console.log("2" === 2)
