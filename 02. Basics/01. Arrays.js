// Array
const myArr = [0,1,3,5,6]
console.log(myArr[2])
const myCars = ["hyundai", "toyota", "kia"]
console.log(typeof myCars)    // type of array is object
console.log(myCars[1])  

const myArr2 = new Array(1,4,5,3,2,7)
console.log(typeof myArr2)
console.log(myArr2[3])

// Array Methods
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(9)
console.log(myArr);
myArr.shift()
myArr.shift()
console.log(myArr)

console.log(myArr.includes(101))
console.log(myArr.indexOf(5))

const newArr = myArr.join()  // I can give seperator operator in form of string
console.log(newArr)  // The join() method creates a string by concatenating all the elements of an array, 
// separated by a specified separator (or a comma by default). In this case, since no separator is provided, 
// the default separator (a comma) is used.
console.log(myArr)

// slice, splice
console.log("A", myArr)
const myArrn1 = myArr.slice(1,3)  // does not changes the array
console.log(myArrn1)
console.log("B", myArr)

console.log("C", myArr)
const myArrn2 = myArr.splice(1,3)  // it changes the array
console.log(myArrn2)
console.log("D", myArr)
