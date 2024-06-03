class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME: ${this.username}`)
    }
    static createId(){     // static didn't give access to every object instanciated from this class
        return `234`
    }
}

const userOne = new User("hitesh")
// console.log(userOne.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@hello.com")
console.log(iphone)
console.log(iphone.logMe())
