// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)
// const mynewObj = Object.create(null)
const chai = {
    name: 'ginger tea',
    price: 200,
    isAvailaible: true,
    orderChai: function() {
        console.log("chai nhi hai")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name")) 

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${value}, ${key}`)}
}