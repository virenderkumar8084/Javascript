// Objects can be declared as a constructor or literals 
// singleton (type of object made from constructor)   ----> object.create()
// singleton will not form if we declare object as a literals

// Object literals

// Interview question --->  Create a symbol and use it in object as key value
const sym = Symbol("key1")

const jsUser = {
    name: "Hitler", 
    "fullName": "Hitesh Choudhary",
    age: 32,
    [sym]: "mykey1",
    email: "fcuk@gmail.com",
    location: "Jaipur",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Wednesday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])

console.log(jsUser.fullName)   // We cannot access through this method if we have spacing in the variable name
console.log(jsUser["fullName"])
console.log(typeof jsUser[sym])

// changing key value's in object 
jsUser.email = "hitesh@chat.com"
console.log(jsUser["email"])

// Freezing the object so we can't make changes in object key value's
// Object.freeze(jsUser)
jsUser.email = "HITESH@microsoft.com"
console.log(jsUser)   // Due to freeze keyword the value can't be changed
//  We can also remove brackets from the jsUser object i.e sym and there is no problem in it

// We can treat function as variable in object 
jsUser.greetingOne = function(){
    console.log("Hello jsUser")
}
console.log(jsUser.greetingOne())

jsUser.greetingTwo = function(){
    console.log(`Hello jsUser, ${this.fullName}`)
}
console.log(jsUser.greetingTwo())


