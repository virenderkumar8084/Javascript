/* JavaScript is dynamically typed. In a dynamically typed language like JavaScript, 
variable types are determined at runtime, and you don't need to explicitly declare 
the data type of a variable. This allows for more flexibility but can sometimes lead to 
unexpected behavior if types are not handled carefully. */

/* Two types of datatypes based on how it is stored in memory and how it can be accesed
1. Primitive: 7 categories 
        (a) String (b) Number (c) Boolean (d) null (e) undefined (f) Symbol (g) BigInt
2. Non Primitive/Reference type: (a) Array (b) Objects (c) Function
*/

const score = 100
const scoreValue = 100.4

let isLoggedIn = true
let outsideTemp = null
let accountEmail;

// Symbol declaration : If value passed to variable is same then we can make both of them different
const id = Symbol('2342')
const anotherId = Symbol('2342')
console.log(id == anotherId)

const bigNumber = 235891589468586568n
console.log(bigNumber)


// Array Object
const heroes = ["marvel", "soldier", "anyone"]
let myObj = {
    name: 'jimny',
    age: 22
}
console.log(heroes)
console.log(myObj)

const myFunction = function(){        
    console.log("hello world");
}


// Return type of variables in JavaScript
// 1) Primitive Datatypes
    // Number => number
    // String  => string
    // Boolean  => boolean
    // null  => object
    // undefined  =>  undefined
    // Symbol  =>  symbol
    // BigInt  =>  bigint

// 2) Non-primitive Datatypes
    // Arrays  =>  object
    // Function  =>  function
    // Object  =>  object

console.log("")
console.log("")


/********************************Stack and Heap Memory in JS************************************/

//  Primitive => Stack Memory is used

let myName = "adamsmith"
let myfriendName = myName
myfriendName = "johnson"
console.log(myName)
console.log(myfriendName)


//  Non Primitive => Heap Memory is used

let userOne = {
    name: "userone",
    upiId: "user@ybl"
}
let anotherUser = userOne
anotherUser.name = "anotheruser" 
console.log(anotherUser.name)
console.log(userOne.name)