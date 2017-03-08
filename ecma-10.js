var randMap = new Map();
randMap.set("key1", "Random String");
randMap.set("key2", 10);

document.write(`key1 : ${randMap.get("key1")}<br />`);
document.write(`key2 : ${randMap.get("key2")}<br />`);

document.write(`Map Size : ${randMap.size}<br />`);

randMap.forEach(function (value, key) {
    document.write(`${key} : ${value}<br />`);
})