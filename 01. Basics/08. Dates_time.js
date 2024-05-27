// Dates in javascript

let myDate = new Date()
console.log(typeof myDate)
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())

// let myCreatedDate = new Date(2023, 7, 23)
// let myCreatedDate = new Date(2023, 4, 21, 14, 45)
// let myCreatedDate = new Date("2024-01-20") US STANDARD TIME
let myCreatedDate = new Date("12-23-23")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Date.now())
console.log(Math.floor(Date.now()/1000))
console.log((new Date()).getMonth()+1) // Indexing of Month starts from 0 
console.log((new Date()).getDay())   // Indexing of day starts from 1
