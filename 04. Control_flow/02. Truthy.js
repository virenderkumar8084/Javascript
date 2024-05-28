const userEmail = "hitesh@google.com"

if(userEmail){
    console.log("Got user email")
} else{
    console.log("No user email")
}

// Falsy Values --> 0, -0, "", BigInt 0n, false, null, undefined, NaN
// Truthy Values --> "0", 'false', " ", [], {}, function(){}

// How to check array is empty or not
// if(arr.length === 0){
//   console.log("ARRAY IS EMPTY")
// }

// How to check object is empty or not? 
// const myObj = {} 
// if(Object.keys(myObj).length === 0){
//     console.log("OBJECT IS EMPTY")
// }

// Nullish Coalescing Operator (??) : null, undefined
let val1 = 5
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 20
// val1 = null ?? 10 ?? 20
// val1 = null ?? undefined ?? 20
console.log(val1)


// Terniary Operator
// condition ? true : false
const price = 170
price > 180 ? console.log("more than 180") : console.log("less than 180")