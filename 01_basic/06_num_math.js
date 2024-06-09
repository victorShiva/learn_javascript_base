const score = 200;
// console.log(score.toFixed(3));                      // 200.000
// console.log(score);


const balance = new Number(400);
// console.log(balance);                                   //[Number:400]

// console.log(balance.toString().length);                     //3
// console.log(balance.toFixed(2));                           //400.00
// console.log(typeof (balance.toFixed(2)));                     //string

const otherNumber = 123.233345;
// console.log(otherNumber.toPrecision(4));                        //123.2
// console.log(otherNumber.toPrecision(3));                          //123
// console.log(otherNumber.toPrecision(2));                            //12e+2

const hundreds = 100000000;
// console.log(hundreds.toLocaleString());                             // 100,000,000
// console.log(hundreds.toLocaleString('en-IN'));                       //10,00,00,000


//***********************   Math *******************/
console.log(Math);
// console.log(Math.abs(-5));     //5
// console.log(Math.abs(5));       //5


// console.log(Math.round(8.5));     //9
// console.log(Math.ceil(8.2));     //9  always top value
// console.log(Math.floor(8.9));    // always floor value  8

console.log(`math random_------------------------`);
console.log(Math.random());

console.log(Math.random() * 10);
console.log(Math.floor(Math.random()*10) +1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);