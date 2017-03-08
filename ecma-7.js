let capital = Symbol("State capital");

let pennsylvania = {};
pennsylvania[capital] = "Harrisburg";
document.write(`Capital of PA : ${pennsylvania[capital]}<br />`);
document.write(`Capital of PA : ${capital.toString()}<br />`);

let employNum = Symbol.for("Employee Number");

let bobSmith = {};
bobSmith[employNum] = 10;

let sallyMarks = {};
sallyMarks[employNum] = 11;

document.write(`Bob : ${bobSmith[employNum]}<br />`);
document.write(`sally : ${sallyMarks[employNum]}<br />`);

