// let myName = "charlie        "
// let myCar = "diesel        "
// console.log(myName.length)
// // Goal is to add the property to every string bydefault
// console.log(myName.truelength)

let myHeroes = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh = function() {
    console.log(`Hitesh is present in all the objects`)
}
// heroPower.hitesh()

Array.prototype.heyhitesh = function() {
    console.log(`hey hitesh`)
}
// myHeroes.heyhitesh()
// heroPower.heyhitesh()  //heroPower.heyhitesh is not a function

//                      Function--------------------------->Object----------------->null
//                      String---------------------------->Object----------------->null
//                      Array------------------------------>Object----------------->null


// If some power/functionality is injected in object then its availaible to all of them
// But providing functionality to parents does not guarantee access to the grandparent 


// Inheritence

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()