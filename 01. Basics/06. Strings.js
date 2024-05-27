const name = "micheal"

// const gameName = new String('pokemon')  another method for string declaration

const repoCount = 34

// console.log(name + repoCount + " value")

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)

const gameName = new String('pokemon') 
console.log(gameName[0])
// console.log(typeof gameName.__proto__)  returns an object
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))                                          
console.log(gameName.indexOf('m'))

const newString = gameName.substring(2,6) // doesn't obey the negative values at first index and ignore it
console.log(newString)

const anotherString = gameName.slice(-3,6) // negative first indexing means it will start indexing as -1 from end and print the values from given index to rightmost index in right side
console.log(anotherString)

const nameString = "            Hitesh         "
console.log(nameString);
console.log(nameString.trim())   // trim the leading and trailing white spaces

const url = "https://hitesh.com/%50hitesh"
console.log(url.replace('%50', '-'));
console.log(url.includes('hitesh'))    // returns a true/false value as an o/p
