var randSet = new Set();
randSet.add(10);
randSet.add("word");

document.write(`Has 10 ${randSet.has(10)} <br />`);

document.write(`set Size ${randSet.size} <br />`);

randSet.delete(10);

for(let val of randSet) document.write(`Set Val : ${val} <br />`);