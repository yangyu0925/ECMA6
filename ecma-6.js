class Mammal{
    constructor(name)
    {
        console.log('constructor');
        this._name = name;
    }

    get name()
    {
        console.log('get');
        return this._name;
    }

    set name(name)
    {
        console.log('set');
        this._name = name;
    }

    static makeMammal(name)
    {
        console.log('makeMammal');
        return new Mammal(name);
    }

    getInfo()
    {
        return `${this.name} is a mammal`;
    }
}

// let monkey = new Mammal("Fred");
//
// monkey.name = "Mark";
//
// document.write(`Mammal: ${monkey.name}<br />`);

// let chipmunk = Mammal.makeMammal("Chipper");
//document.write(`Mammal 2: ${chipmunk.name}<br />`);

class Marsupial extends Mammal{
    constructor(name, hasPouch)
    {
        super(name);
        this._hasPouch = hasPouch;
    }

    get hasPouch()
    {
        return this._hasPouch;
    }

    set hasPouch(hasPouch)
    {
        this._hasPouch = hasPouch;
    }

    getInfo()
    {
        return `${this.name} is a Marsupial`;
    }
}
//
// let kangaroo = new Marsupial("Paul", true);
// document.write(`It is ${ kangaroo.hasPouch} that ${kangaroo.name} has a pouch<br />`)
// document.write(`${kangaroo.getInfo()}<br />`);

function getClass(classType) {
    if (classType == 1) {
        return Mammal;
    } else {
        return Marsupial;
    }
}

class Koala extends getClass(2) {
    constructor(name)
    {
        super(name);
    }
}

let carl = new Koala("Carl");
document.write(`${carl.getInfo()}<br />`);


