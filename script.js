const display = document.getElementById("display");
let history = '';

function appendToDisplay(input){
    display.value += input;
    addToHistory(value);
    
}

function clearDisplay(){
    display.value = "";
    addToHistory(value);
}

function calculate(){
    try{
        display.value = eval(display.value);
       
    }
    catch(error){
        display.value = "Error";
        addToHistory(value);
    }
}

function changeSign() {
    
    let currentValue = display.value;
    if (currentValue !== "" && !isNaN(currentValue)) {
        
        display.value = -parseFloat(currentValue);
        addToHistory(value);
    }
}
function addToHistory(value) {
    history += value;
    document.getElementById('history').innerText = history;
}