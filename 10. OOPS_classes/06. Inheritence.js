class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourses(){
        console.log(`New course was added by ${this.username}`)
    }
}

const cherry = new Teacher("cherry", "cherry@lnmiit.ac.in", "nephew@189$")
cherry.addCourses()

const elan = new User("elan")
// elan.addCourses()               // It doesn't have access.
elan.logMe()
cherry.logMe()

console.log(cherry instanceof Teacher)
console.log(cherry instanceof User)
console.log(elan instanceof User)
console.log(elan instanceof Teacher)