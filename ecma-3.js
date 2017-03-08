let fName = "Yang";
let lName = "Yu";

document.write(`${fName} ${lName}<br />`);

let num1 = 10;
let num2 = 5;

document.write(`${num1} * ${num2} = ${num1 * num2}<br />`);

function doMatch(strings, ...values) {
    if (strings[0] == 'Add') {
        document.write(`${values[0]} + ${values[1]} = ${values[0] + values[1]} <br />`)
    } else if (strings[0] == 'Sub') {
        document.write(`${values[0]} - ${values[1]} = ${values[0] - values[1]} <br />`)
    }
}

doMatch `Add${10} ${20}`;
doMatch `Sub${10} ${20}`;

function doMatch(strings, ...values) {
    if (strings == 'Add') {
        document.write(`${values[0]} + ${values[1]} = ${values[0] + values[1]} <br />`)
    } else if (strings == 'Sub') {
        document.write(`${values[0]} - ${values[1]} = ${values[0] - values[1]} <br />`)
    }
}

doMatch('Add', 10, 20);
doMatch('Sub', 10, 20);

for (let c of fName) {
    document.write(`${c} <br />`);
}

document.write("Hello ".repeat(3) + "<br />");

document.write(fName.startsWith("Ya") + "<br />");
document.write(fName.endsWith("ang") + "<br />");
document.write(fName.includes("an") + "<br />");

let multilineStr = "This is \
    a muliiline \
    string";
document.write(`${multilineStr}<br />`);

let multilineStr1 = `This is
    a muliiline
    string`;
document.write(`${multilineStr1}<br />`);
