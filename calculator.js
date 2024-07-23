const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearValue(){
    display.value ="";
}
function delValue(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "ERROR";
    }
    
}
