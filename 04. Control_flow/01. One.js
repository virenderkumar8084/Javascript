//  if
const temp1 = 40;
const temp2 = -40;
if (temp1 !== temp2) {
    // Code will be executed
    console.log("Executed")
}
else{
    console.log("Not Executed")
}
// Comparison Operators -->    >, <, <=, >=, ==, !=, ===, !==(used for opposite sign and equal value)

const score = 500
if(score > 200){
    const power = "fly"
    console.log(`Userpower: ${power}`)
}
// console.log(`Userpower: ${power}`)    // block scope of power

const balance = 400
// if(balance > 500) console.log(balance), console.log("test");   // not a good practice

// Nesting conditions --> If any condition is satisfied it will not check other conditions
if (balance < 500) {
    console.log("less than 500")
} else if (balance < 750) {
    console.log("less than 750")
} else if(balance < 999){
    console.log("less than 999")
} else {
    console.log("greater than 999")
}

const userLoggedIn = true
const debitCard = true
const loggedInGoogle = true
const loggedInEmail = false
if(userLoggedIn && debitCard){
    console.log("allowed for purchase")
}
if(loggedInEmail || loggedInGoogle){
    console.log("User logged in")
}


// switch case statements basic syntax
// switch (key) {
// case value:
        
//         break;

//     default:
//         break;
// }

const month = 4;
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("Default")
        break;
}