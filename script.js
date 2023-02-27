function clearScreen() {                                        // function to clear all the values
    document.getElementById("result").value = "";
}

function display(value) {                                       // function to display values
    document.getElementById("result").value += value;
}

function calculate() {                                          // function to evaluates the expression and returns result
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}