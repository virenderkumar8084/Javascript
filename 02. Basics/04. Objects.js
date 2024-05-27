// Singleton or from constructors
// const tinderUser = new Object()   // Singleton Object
// console.log(tinderUser)
const tinderUser = {}    // Non singleton object
tinderUser.id = "123ABC"
tinderUser.name = "samharsh"
tinderUser.isLoggedIn = false
console.log(tinderUser) 

const anotherUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Hitesh",
            lastName: "Choudhary"
        }
    }
}
// console.log(anotherUser.fullName.userFullName)

// combine the objects
const obj1 = { 1: "a", 2: "b", 3: "c" }
const obj2 = { 4: "d", 5: "e", 6: "f" }
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)   // Optional parameter ---> {} 
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

const users = [
    {
        id: "1",
        email: "3fcuk@gmail.com"
    },
    {
        id: "2",
        email: "2fcuk@gmail.com"
    },
    {
        id: "3",
        email: "1fcuk@gmail.com"
    }
]

// users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser)) 
console.log(Object.values(tinderUser)) 
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// Object De-structuring and API intro 

const course = {
    courseName: "js-hc",
    coursePrice: "30000",
    courseInstructor: "hiteshchoudhary"
}

// console.log(course.courseInstructor)
// Another method for accessing the content of objects
const {courseInstructor: instructor} = course
console.log(instructor)

// Structure of JSON
// API can be obtained in form of object or array of objects
// {
    // "name": "jshc",
    // "price": "free",
    // "instructor": "hc"
// }
// [
//     {}
//     {}
//     {}
// ]
