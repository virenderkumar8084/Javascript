// Global scope and local scope
if (true) {
    let a = 20
    const b = 10
    var c = 30
}

// console.log(a)
// console.log(b)
// Below line will work due to var keyword used in file, Generally we avoid var
// console.log(c)

function one(){
    const username = "hitesh_choudhary"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)

    // two()
}

// one()

if(true)
{
    const username = "hitesh"
    if(username == "hitesh")
    {
        const website = "youtube"
        // console.log(`${username} ${website}`)    // OK
    }
    // console.log(website)    // Can't accessed due to scope of website
}

// console.log(username)    //Can't accessed due to scope of username

/**********************************INTERESTING*******************************************/

// console.log(addOne(5))   // No error will be thrown 
function addOne(num){
    return num+1
}

// console.log(addTwo(5))     // This will throw an error 
const addTwo = function(num){
    return num + 2
}

// CONCLUSION: Error is depending upon type of technique for function declaration   (HOISTING)
