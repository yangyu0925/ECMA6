var p1 = Promise.resolve("Resolve Me");

p1.then((res) => document.write(`${res}<br />`));

var p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Resolve Me2'), 2000);
});

p2.then((res) => document.write(`${res}<br />`));

let randVal = 18;

var p3 = new Promise(function (resolve, reject) {
    if (randVal == 18) {
        resolve("Good Value");
    } else {
        reject("Bad Value");
    }
});

p3.then((val) => document.write(`${val}<br />`),
    (err) => document.write(`${err}<br />`));

let randVal = 16;

var p4 = new Promise((resolve, reject) => {
    if (randVal <= 17) {
        throw new Error("Can`t Vote");
    } else {
        resolve("Can vore");
    }
})

p4.then((val) => document.write(`${val}<br />`))
.catch((err) => document.write(`${err.message}`));