function createAnimal(name, owner) {
    return {
        name,
        owner,
        getInfo(){
            return `${this.name} is owned by ${this.owner}`
        },
        address: {
            street: '123 Main St',
            city: 'Beijing'
        }
    }
}

var spot = createAnimal("Spot", "Doug");
document.write(`${spot.getInfo()}<br />`)
document.write(`${spot.name} is at ${spot.address.street}<br />`)
document.write(`${Object.getOwnPropertyNames(spot).join(" ")}<br />`)

let {name, owner} = spot;
document.write(`Name : ${name} Owner : ${owner}<br />`);

let {address} = spot;
document.write(`Address : ${address.street}<br />`);

let favNums = [2.718, .5772, 4.6692];
let[,,chaos] = favNums;
document.write(`Chaos : ${chaos}<br />`);

let [, ...last2] = favNums;
document.write(`2nd Num : ${last2}<br />`);

let val1 = 1, val2 = 2;
[val1, val2] = [val2, val1];
document.write(`Val2 : ${val2} Val1 : ${val1}<br />`);
