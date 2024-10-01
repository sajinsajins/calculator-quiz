var num1, num2;

function newQuestion() {
    document.getElementById("input").value = '';
    document.getElementById("input").placeholder = '';
    var operator = document.getElementById("operators").value;
    var correctAnswer;

    switch (operator) {
        case "addition":
            correctAnswer=addition()
            break;
        case "substraction":
            correctAnswer=substraction();
            break;
        case "multiplication":
            correctAnswer=multiplication();
            break;
        case "division":
            correctAnswer=division();
            break;
        default:
            console.error("Invalid operator");
    }

document.getElementById("input").dataset.correctAnswer = correctAnswer;
}

function check() {
    var userAnswer = parseInt(document.getElementById("input").value);
    var correctAnswer = parseInt(document.getElementById("input").dataset.correctAnswer);

    if (userAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is " + correctAnswer +' ' + "Try again..")
    }
}



function addition() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    var question = num1 + ' + ' + num2 + ' = ';
    document.getElementById("input").placeholder = question;
    return num1 + num2;

}

function substraction() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    var question = num1 + ' - ' + num2 + ' = ';
    document.getElementById("input").placeholder = question;
    return num1 - num2;
}

function multiplication() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    var question = num1 + ' * ' + num2 + ' = ';
    document.getElementById("input").placeholder = question;
    return num1 * num2;
}

function division() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    if (num2 === 0) {
        num2 = Math.floor(Math.random() * 10) + 1;
    }

    var question = num1 + ' / ' + num2 + ' = ';
    document.getElementById("input").placeholder = question;
    return num1 / num2;

}

function cleardisplay(){
    location.reload()
}
