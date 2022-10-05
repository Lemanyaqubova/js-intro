let salary = 800;
let operator = prompt("Operator");
let inputMoney = Number(prompt("money"));
calculation(salary, inputMoney, operator)

function sum(salary, inputMoney) {
    return salary + inputMoney;
}

function sub(salary, inputMoney) {
    return salary - inputMoney
}

function calculation(salary, inputMoney, operator) {
    switch (operator) {
        case "+":
            alert("add:" + sum(salary, inputMoney));
            break;

        case "-":
            if (inputMoney < salary) {
                alert("decrement:" + sub(salary, inputMoney));
            } else if (inputMoney > salary) {
                alert("have not enough money");
            }

            break;
        default:
            alert("Please write correct.");
            break;
    }

}