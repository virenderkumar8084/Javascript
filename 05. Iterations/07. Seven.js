const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// const newNums = myNums.map( (nums) => {
//     return nums+10
// })
// console.log(newNums)

// Chaining methods
const newNums = myNums.map( (nums) => {return nums*10})
                .map( (nums) => {return nums+1})
                .filter( (nums) => {return nums > 50})
console.log(newNums)