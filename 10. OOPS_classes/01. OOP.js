const user = {
    name: "harman",
    logInCount: 23,
    isLoggedIn: false,
    getUserdetails: function () {
        // console.log("Got the user details from the database")
        // console.log(`${this.name}, ${this.logInCount}, ${this.isLoggedIn}`)
        console.log(this)
    }
}
// For current context we use 'this' keyword
// console.log(user.name)
// console.log(user.getUserdetails())
// console.log(this)

// If we want to create another user object then we have to write all these
// things again and again so to solve this problem we use constructor function.
// const promiseOne = new Promise()
// new word is a constructor function it allows us to create a multiple instances 
// from single object literal or used to make new context
// Eveerytime constructor function gives a new instance

function User(username, logInCount, isLoggedIn) {
    this.username = username
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this                       // No need to write return this its implicit defined
}
// new --> 1. empty instance is created(or new object is created) 2. Constructor function is called.
//         3. Arguments are packed into current instance 4. Now its returned impicitally
const userOne = new User("hitesh", 12, true)
const userTwo = new User("charlie", 14, false)
// console.log(userOne)
// console.log(userTwo)
// console.log(userOne.constructor)   // it return a function User
// console.log(userOne instanceof User)
// console.log(userOne instanceof Object)
