// ***************** Array ***********
const myArr = [1,2,3,4,5];
const myHeros=["krish","shaktiman","hobo"];

console.log(myHeros[1]);

const myArr2 = new Array(4,5,6,3,8,4);
console.log(myArr2);


//**********arrray methods */

let myArr3 =[10,23,45,77,22];
myArr3.push(33);
myArr3.push(703);
console.log(myArr3);
myArr3.pop();

myArr3.unshift(100);
myArr3.unshift(200);
console.log(myArr3);

myArr3.shift();
console.log(myArr3);

console.log(myArr3.includes(200));
console.log(myArr3.includes(100));


console.log(myArr3.indexOf(100));
console.log(myArr3.indexOf(500));


myArr3 =[10,23,45,77,22,50];
let copyArr3 = myArr3.join();

console.log(myArr3);
console.log(copyArr3);
console.log(typeof copyArr3);


// ***********slice splice **********

console.log(`slice vs splice ---------------`);

myArr3 =[10,23,45,77,22,50];
console.log("A" , myArr3);

let slice1 = myArr3.slice(1,5);
console.log(slice1);

console.log("A" , myArr3);


let splice1 = myArr3.splice(1,5);
console.log(splice1);

console.log("A" , myArr3);


///////////////**************   part 2 ++++++++++++ */



