const myform = document.querySelector('form')
// form is submitted in two way post or get
// stop the default action
// this usecase will give you empty string
// const weight = parseInt(document.querySelector('#weight').value)
myform.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height == ' ' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    } else if(weight == ' ' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    } else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // show the results
        // results.innerHTML = `<span>${bmi}</span>`
        if(bmi <= 18.6)
        {
            results.innerHTML = `<span>${bmi}</span><br> You are underweight`
        }else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<span>${bmi}</span><br> You are in normal range`
        }else{
            results.innerHTML = `<span>${bmi}</span><br> You are overweight`
        }
    }
})