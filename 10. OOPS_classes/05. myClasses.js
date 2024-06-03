//  ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `$abc{this.username.toUpperCase()}`
//     }
// }

// const userOne = new User("harmnan", "hs@google.com", "tysm@5694$")
// console.log(userOne.encryptPassword())


// behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `abc${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new User("harry", "harry@chat.com", "hello@#134")
console.log(userTwo)
console.log(userTwo.encryptPassword())
console.log(userTwo.changeUsername())
