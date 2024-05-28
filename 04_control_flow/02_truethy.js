const userEmail= "shiva@.ai";
// if(userEmail){
//     console.log("Got User Email");
// }else{
//     console.log("Don't have user Email");
// }


//falsy values :->          false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
//truthy values :->        true , "0" , "false" , [] , " " , {} , function(){} ,  



let fruits = [];
// if(fruits){
//     console.log("executed");
// }


// if(fruits.length === 0){
//     console.log("Array is Empty");
// }


// let emptyObject = {};
// if(Object.keys(emptyObject).length === 0 ){
//     console.log("emptyObject is Empty");
// }




// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10;              //5
val1 = null ?? 10;           // 10
val1 = undefined ?? 15;     //15
val1 = null ?? 12 ?? 34;     // 12

console.log(val1);



// Ternary Operator
// condition ? true : false ;

const icePrice = 80;
icePrice >= 100 ? console.log('more than 100') : console.log('less than 100');


// function greet(isMorning) {
//     return isMorning ? 'Good morning!' : 'Good evening!';
// }
// console.log(greet(true));  // Output: Good morning!
// console.log(greet(false)); // Output: Good evening!


let age = 18;
let canVote = age >= 18 ? 'Yes, you can vote.' : 'No, you cannot vote.' ;

console.log(canVote);