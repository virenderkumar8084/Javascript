// Immidiately Invoked Function Expression (IIFE)
// If function have a problem with global scope (pollution from global scope) then we use IIFE

// function tea(){
//     console.log(`DB Connected`)
// }
// tea()

// IIFE or named IIFE
(function tea(){
    console.log(`DB Connected`)
})();     // We have to end this function with the help of semicolon ';' to be added explicitally

// Can be written as arrow function or unnamed IIFE
( (name) => {
    console.log(`DB Connected to ${name}`)
} )("harman");



// JS Execution Context
/* 
1.JS creates Global execution context.
2.Next it creates memory phase.
3.Memory phase - In this phase,the variables are set to undefined 
  until the execution phase(next phase) and the functions are set to their definitions.
4.Next it creates the execution phase.
5.Execution phase - In this phase, the variables are initialsed to given values and 
  when the function's are called, it creates a memory phase and execution phase for the function 
  just like the main one and Returned value is passed to the global environment.

For live demo:
browser --> inspect --> Sources
create a snippet with few functions and visually experience the call stack.
*/