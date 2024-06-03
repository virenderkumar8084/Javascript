function multipleby5(num) {
    return num*5
}
multipleby5.power = 2
console.log(multipleby5(5))
console.log(multipleby5.power)
console.log(multipleby5.prototype)

function createUser(username, score) {
    this.username = username
    this.score = score
}
// we can inject our functionality to any object or function
createUser.prototype.increment = function() {
    // score++   // Now confusion is that for which user it have to increment the score
    this.score++
}
createUser.prototype.printMe = function() {
    console.log(`score is ${this.score} and username is ${this.username}`)
}
const chai = new createUser("chai", 100)
const tea = new createUser("tea", 500)

chai.printMe()
// tea.printMe()   // importance of new keyword
// after placing new
tea.printMe()



// Some notes 
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the 
constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and 
this is bound to the newly created object. If no explicit return value is specified from the 
constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return 
a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/