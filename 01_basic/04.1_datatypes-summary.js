// # Primitive
// 7 types: String ,Number ,Boolean , null , undefined ,Symbol , BigInt

const score=100;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const largeNumber= 765434567765434567n

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);
console.log(id === anotherId);

// ## Javascript is Dynamic Typed language


// ### Non-Primitive  or Reference 
// Array , Objects , Functions
 
let heros=["shaktiman", "Aryaman","Krish"]
let myObj={
    name:"shiva",
    age:25
}

function myFun(){
    console.log("Hello world");
}

    console.log(typeof heros);
    console.log(typeof myObj);
    console.log(typeof myFun);