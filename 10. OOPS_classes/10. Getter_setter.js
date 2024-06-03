class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value                                        // Maximum call stack size exceeded
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value                                        // Maximum call stack size exceeded
    }
}

const userOne = new User("hitman@ai.com", "cinna$123")
console.log(userOne.password) 
console.log(userOne.email)