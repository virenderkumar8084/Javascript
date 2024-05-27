// Packaging of multiple line codes into a single packet

// function count1to5() {
// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")
// }

// count1to5()
// count1to5()

// function addTwonumbers(num1, num2){                  // num1 and num2 are parameters
//     console.log(num1 + num2)
// }

function addTwonumbers(num1, num2) {                    // num1 and num2 are parameters
    // let res = num1 + num2
    // return res
    return num1 + num2
}

const result = addTwonumbers(3, 4)    // Passing 2 numbers as arguments
// console.log(result);
// addTwonumbers("s", 5)   Problem in passing 2 numbers if datatype of one of them is different

function loginUsermsg(username) {
    if (!username) {
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

let ret_val = loginUsermsg("harman")
console.log(ret_val)


// Shopping cart problem
// rest and spread operator are used in same way
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,2000,300))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 3000, 2400, 4500))

const user = {
    name: "hitesh",
    price: 133
}
function handleObjects(anyObject) {
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObjects(user)   // We can also pass object directly

const myNewArray = [200, 400, 300, 1000]

function returnSecondVal(getArray){
    return getArray[1]
}

console.log(returnSecondVal(myNewArray))          // We can also pass array directly 