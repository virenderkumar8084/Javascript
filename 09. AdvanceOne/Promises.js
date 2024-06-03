// Promises in js  --> read the mdn documentation

// Promises in JavaScript are a way to handle asynchronous operations more easily. 
// Asynchronous operations are tasks that might take some time to complete, like 
// fetching data from a server, reading a file, or waiting for a user input.
// Instead of blocking the execution of your code and waiting for these tasks to finish,
// promises allow you to keep your code non-blocking and handle the results (or errors) 
// when the asynchronous task is complete.

// consumption of promises and creation of promises takes place during the process. 

// just declaring a promise
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async tasks
    // DB calls, cryptography, Network calls
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})          
// Consuming a promise
promiseOne.then(function(){
    console.log("Promise consumed")
})

// Without storing a promise in variable
new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('Async task2 is completed')
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async2 resolved')
})

// Third promise
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({name: "tune", email: "someone@example.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user)
})

// Fourth Promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "hitesh", password: 342})
        } else{
            // rejection of data fetching
            reject('ERROR: something went wrong')
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(function(){
    console.log('The promise is either resolved or rejected')
})
// At the above we are not able to store the returned value in variable and then print it, 
// we have to do chaining 

// Fifth Promise
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "js", password: 8888888888})
        } else{
            // rejection of data fetching
            reject('ERROR: js went wrong')
        }
    },1000)
})
// Other way of accepting response   Async and await does not handle catch successfully
// Async and await can't handle errors directly
// async function consumepromiseFive(){
    // const response = await promiseFive
    // console.log(response)
// }
async function consumepromiseFive(){
    try {
        const response = await promiseFive
        console.log(response) 
    } catch (error) {
        console.log(error)
    }
}
consumepromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // type of response from fetch? convert it into JSON
//         const data = await response.json()    // response.json also takes time so put await before it
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary').then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log('error')
}).finally(function(){
    console.log('something is happened')
})