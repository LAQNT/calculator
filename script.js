// let screenCalc = document.getElementById("operation");


function n(dato) {
    document.getElementById("operation").value +=dato;   
}

function cancella() {
    document.getElementById("operation").value = "";
}

function operation() {
    document.getElementById("operation").value = eval(document.getElementById("operation").value);
}