let marvel_heros = ["thor","ironman","spiderman"];
let native_h = ["shaktiman","krish","aryaman"];

// marvel_heros.push(native_h);
// console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'shaktiman', 'krish', 'aryaman' ] ]



let allHeros =marvel_heros.concat(native_h);
// console.log(marvel_heros);  //[ 'thor', 'ironman', 'spiderman' ]
// console.log(allHeros);  // [ 'thor', 'ironman', 'spiderman', 'shaktiman', 'krish', 'aryaman' ]

let all_new_heros = [...marvel_heros,...native_h];
console.log(all_new_heros);



let newArr = [2,3,4,[9,8,7],12,34,[43,45,56,1,[100,200]]];
let real_newArr = newArr.flat(Infinity);

console.log(real_newArr);


//****************** convert to Array */
console.log(`convert to Array ------------------`);
console.log(Array.isArray("Shivba")); //false
console.log(Array.from("Shivba")); 

console.log(Array.from(["Shivba","Gupta"])); 

console.log(Array.from({name:"Shivba",last:"Gupta",age:25}));     //[]

console.log(Array.from({name:"Shivba",last:"Gupta",age:25}));  // ????


let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1,score2,score3,score4))