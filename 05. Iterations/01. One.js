// for
for (let value = 0; value <= 10; value++) {
    const element = value
    if(element === 5){
        console.log("Best number --> 5")
    }
    console.log(value)
}
// console.log(element)   blocks the scope of element
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop Value: ${i}`)
    for (let j = 1; j <= 10; j++) {
        const element = j;
        console.log(`Inner loop value: ${j} and Outer loop value: ${i}`)
        // console.log(i + '*' + j + '=' + i*j)
    }
}
const myArray = ["flash", "batman", "superman"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]
    console.log(element)
}

// break and continue
for (let index = 1; index <= 20; index++) {
    if(index === 5)
    {
        break;
    }
    console.log(`Value of i is ${index}`)
}
for (let index = 1; index <= 20; index++) {
    if(index <= 5 && index > 0)
    {
        continue
    }
    console.log(`Value of i is ${index}`)
}