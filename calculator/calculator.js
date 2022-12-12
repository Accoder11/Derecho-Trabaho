// Ask for the first number
const num1 = prompt ("Enter the first number ");


// Ask for the 2nd number
const num2 = prompt ("Enter the 2nd number ");

// Show the entered values

let span = document.getElementById("firstNumber");
span.innerHTML = Number(num1);

let span1 = document.getElementById("SecondNumber");
span1.innerHTML = Number(num2);


// Ask them to click the operator button

function add1 (num1, num2) {
    let h2 = document.getElementById("result");
    h2.innerHTML = "Answer: " + (Number (span.innerHTML) + Number (span1.innerHTML));
    h2.style = "color: blue; font-size: 30px;";
}

function subtract (num1, num2) {
    let h2 = document.getElementById("result");
    h2.innerHTML = "Answer: " + (Number (span.innerHTML) - Number (span1.innerHTML));
    h2.style = "color: blue; font-size: 30px;";
}
function multiply (num1, num2) {
    let h2 = document.getElementById("result");
    h2.innerHTML = "Answer: " + (Number (span.innerHTML) * Number (span1.innerHTML));
    h2.style = "color: blue; font-size: 30px;";
}

function divide (num1, num2) {
    let h2 = document.getElementById("result");
    h2.innerHTML = "Answer: " + (Number (span.innerHTML) / Number (span1.innerHTML));
    h2.style = "color: blue; font-size: 30px;";
}


