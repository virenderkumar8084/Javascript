const user = {
    userName: "hitesh", 
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName} , welcome to website`)
        // console.log(this)
    }
}

user.welcomeMessage()
user.userName = "Sam"
user.welcomeMessage()

// console.log(this)   // It refers to an empty object in current environment


// function tea()
// {
//     let username = "harman"
//     console.log(this)
// }
// tea()
// Context of 'this' will work only inside the object not in function 


// const tea = function(){
//     let username = "harman"
//     console.log(this.username)   // this will find the username in global object
// }
// tea()

/********************************************* Arrow function*************************************/ 
//  () => {}
// const tea = () => {
//     let username = "harman"
//     console.log(this.username)
// }
// tea()

// Basic Arrow function

// const addTwonum = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwonum(5,12))

// Same function can be written as a implicit function
// const addTwonum = (num1,num2) => (num1 + num2)
// console.log(addTwonum(4,2))

const objretfnc = () => ({userName : "fam"})
console.log(objretfnc())


