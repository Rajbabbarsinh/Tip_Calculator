let input_tip = document.querySelector('input')
let btn = document.querySelector('button')
let output = document.querySelector('.output')

// once button is clicked, get the value of input box  
// and find 2% as tip, and show the output 


btn.addEventListener("click", calculator)

function calculator(){
    let value = input_tip.value;
    let tip = value * 0.02
     output.innerHTML = `you should give tip : ${tip}`
}