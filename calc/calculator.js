let runningTotal = 0;
let buffer = '0';
let previousOperater;

let screen = document.querySelector('.screen')

function buttonClick(value) {
    if (isNaN(parseInt(value))){
        //NaN Return Not a number is true
        handleSymbol(value);
    }
    else{
        // It is a number
        handleNumber(value)
    }
    screen.innerText = buffer;
};
function handleSymbol(value) {
    // if (value === 'C'){
    //     // screen.innerText = '0';
    //     buffer = '0';
    //     runningTotal = 0;
    // }
    switch(value){
        case '=':
            if (previousOperator === null) {
                // need two numbers to do math
                return;
              }
              flushOperation(parseInt(buffer));
              previousOperator = null;
              buffer = +runningTotal;
              runningTotal = 0;
              break;
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case "←":
            if (buffer.length === 1) {
              buffer = "0";
            } 
            else {
              buffer = buffer.substring(0, buffer.length - 1);
            }
            break
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(value);
            break;
    }
}
function handleMath(value) {
    if (buffer === "0") {
      // do nothing
      return;
    }
  
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
      runningTotal = intBuffer;
    } else {
      flushOperation(intBuffer);
    }
  
    previousOperator = value;
  
    buffer = "0";
  }

function flushOperation(intBuffer) {
    if (previousOperator === "+") {
      runningTotal += intBuffer;
    } else if (previousOperator === "-") {
      runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
      runningTotal *= intBuffer;
    } else {
      runningTotal /= intBuffer;
    }
  }
function handleNumber(value) {
    if (buffer === '0' ){
        buffer = value;
    }
    else{
        buffer = buffer + value
    }
    
}


// function init() {
//     document.querySelector('.calc-buttons').addEventListener('click',buttonClick(even.target.innerText));
    
// }
function init() {
    document
      .querySelector(".calc-buttons")
      .addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
      });
  }

init()