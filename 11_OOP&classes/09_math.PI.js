// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

// let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);




// const newObj = Object.create(null);
// newObj.userName = "Samir";
// console.log(newObj);





// /****************************** 
const chai = {
    name: "ginger chai",
    price: 200,
    isAvailable: true,

    order: function () {
        console.log(`chai nhi bani`);
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));




/////************************ name is not reassigne or modify 


Object.defineProperty(chai, "name", {
    writable: false
});


chai.name = 'lemon tea';
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value != 'function') {
        console.log(` ${key} : ${value}`);
    }
}


////************************* name is not iterable */

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
});


console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value != 'function') {
        console.log(` ${key} : ${value}`);
    }
}
