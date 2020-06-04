let a = prompt("Please enter number A:");
let operator = prompt("Please enter an arithmetic operator:");
let b = prompt("Please enter number B:");
let result;

switch (operator){
    case "+": result = parseInt(a) + parseInt(b);
    alert("The result is: " + result);
    break;

    case "-": result = parseInt(a) - parseInt(b);
    alert("The result is: " + result);
    break;

    case "*": result = parseInt(a) * parseInt(b);
    alert("The result is: " + result);
    break;

    case "/": result = parseInt(a) / parseInt(b);
    alert("The result is: " + result);
    break;

    default:
    alert ("Unknown value!");
    break;
}