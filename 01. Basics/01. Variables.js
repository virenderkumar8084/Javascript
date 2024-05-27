const accountId = 14553
let accountEmail = "name@gmail.com"
var password = "12345"
accountCity = "Jaipur"     // It can be done but don't prefer it usually in js
let accountState;
// console.log(accountState)  // It outputs an undefined due to uninitialised variable
// accountId = 34532   // Not allowed due to const restrictions
// Generally var is not used in modern js due to issue in block scope and function scope 
/*NEVER USE 'var' IN js*/

accountEmail = "namename@gmail.com"
password = "1234422"
accountCity = "Banglore"

console.log(accountId);
console.table([accountId, accountEmail, password, accountCity, accountState])