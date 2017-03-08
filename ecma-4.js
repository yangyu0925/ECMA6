function getSum(num1 = 1, num2 = 1) {
    document.write(`${num1} + ${num2} = ${num1 + num2} <br />`);

    document.write(`${arguments[0]} + ${arguments[1]} = ${arguments[0] + arguments[1]} <br />`);

}

getSum(3);

function getSubMore(...vals) {
    let sum = 0;
    for (let i = 0, len = vals.length; i < len; i++) {
        sum += vals[i];
    }
    document.write(`The sum is ${sum} <br />`);
}

getSubMore(1, 2, 3, 4);

let vals = [1, 2, 3, 4, 5];
getSubMore(...vals);

let difference = (num1, num2) => num1 + num2;

document.write(`5 + 10 = ${difference(5, 10)} <br />`);

let mult = (num1, num2) => {
    let product = num1 * num2;
    document.write(`${num1} * ${num2} = ${product} <br />`);
}

mult(5, 10);

let valArr = [1, 2, 3, 4, 5];

let sumVals = valArr.reduce((a, b) => a + b);
document.write(`Sum : ${sumVals}<br />`);

let evens = valArr.filter(v => v % 2 == 0);
document.write(`Evens: ${evens}<br />`);

let doubles = valArr.map(v => v * 2);
document.write(`Doubles: ${doubles}<br />`);


