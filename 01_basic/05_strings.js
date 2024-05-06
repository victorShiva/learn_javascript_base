const name = "shiva";
const repoCount=48;
console.log(`Hello my name is ${name} my repo count is ${repoCount} .`);

const userName = new String("shivba") ;
console.log(userName);
console.log(typeof userName);

console.log(userName.__proto__);
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.charAt(3));
console.log(userName.indexOf('v'));

const newString = userName.substring(0,4);
console.log(newString);

const anotherString = userName.slice(1,5);
console.log(anotherString);

const newStringOne = "         Victor      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivba.gmail.com/shiva%20gupta";
console.log(url.replace('%20','-'));

console.log(url.includes('shiva'));

const hisName = "raghav-kumar-singh";
const nameArr1=hisName.split('-');
console.log(nameArr1);