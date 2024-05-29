const buttons = document.querySelectorAll(".button")    // In NodeList form
const body = document.querySelector("body")     // Through this we will take control of body

buttons.forEach( (button) => {
    console.log(button)
    button.addEventListener('click', function(event) {
        console.log(event)
        console.log(event.target)
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'greenyellow'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'purple'){
            body.style.backgroundColor = event.target.id
        }
    })
})