const myProblem = () => {
    var a = document.getElementById("input1").value;
    if (a == "4") {
        return "Good Job!"
    }   else
        return "4";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}

const myProblem2 = () => {
    var a = document.getElementById("input2").value;
    if (a == "2") {
        return "Good Job!"
    }   else
        return "2";
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
}

const myProblem3 = () => {
    var a = document.getElementById("input3").value;
    if (a == "trinomial") {
        return "Good Job!"
    }   else
        return "trinomial";
};
const myCalc3 = () => {
    document.getElementById("demo3").innerHTML = myProblem3();
}

const myProblem4 = () => {
    var a = document.getElementById("input4").value;
    if (a == "binomial") {
        return "Good Job!"
    }   else
        return "binomial";
};
const myCalc4 = () => {
    document.getElementById("demo4").innerHTML = myProblem4();
}