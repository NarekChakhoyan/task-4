let number1 = +prompt("greq tiv");
while (isNaN(number1)) {
    number1 = +prompt("mutqagreq tiv");
}
let gorcoxutyun = "";

let result = 0;
const gorcoxutyunner = ["+", "-", "/", "*", "%", "**"];
let isAction = true;

while (isAction) {
    gorcoxutyun = prompt("mutqagreq gorcoxutyun");
    for (let i = 0; i < gorcoxutyunner.length; i++) {
        if (gorcoxutyun === gorcoxutyunner[i]) {
            isAction = false;
            break;
        }

    }
}
let number2 = +prompt("greq myus tivy");
while (isNaN(number2)) {
    number2 = +prompt("mutqagreq tiv")
}
if (!isAction) {
    switch (gorcoxutyun) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "%":
            result = number1 % number2;
            break;
        case "**":
            result = number1 ** number2;
            break;
    }
}

alert(`${number1} ${gorcoxutyun} ${number2} = ${result}`);
