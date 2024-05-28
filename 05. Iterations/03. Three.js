// forof loop --> Arrays,Strings,Maps are iterable while object is not
// Arrays
const arr = [1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num)
}

// Strings
const greetings = "HelloWorld!"
for (const greet of greetings) {
    // console.log(greet)
}

// Maps
const map = new Map()
map.set('IN', "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set('ARG', "ARGENTINA")
// console.log(map)
for (const [key,value] of map) {
    // console.log(key +' :  ' + value)
}
