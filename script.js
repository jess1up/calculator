const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value= "";
}
function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}
function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}
function percent() {
    try {
        display.value = eval(display.value) / 100;
    } catch {
        display.value = "error";
    }
}