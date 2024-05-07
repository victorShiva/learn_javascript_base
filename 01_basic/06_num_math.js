const score = 200;
console.log(score.toFixed(3));
console.log(score);


const balance = new Number(400);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(typeof (balance.toFixed(2)));

const otherNumber = 123.233345;
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));

const hundreds = 100000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


//***********************   Math *******************/
console.log(Math);
console.log(Math.abs(-5));     //5
console.log(Math.abs(5));       //5


console.log(Math.round(8.5));     //9
console.log(Math.ceil(8.2));     //9  always top value
console.log(Math.floor(8.9));    // always floor value  8

console.log(`math random_------------------------`);
console.log(Math.random());

console.log(Math.random() * 10);
console.log(Math.floor(Math.random()*10) +1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);