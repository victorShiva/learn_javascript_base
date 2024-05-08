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



//***************************  ... Spread  operators ********* */

//----------------------------------------------------
let num1 = [10, 20, 30, 40, 50];
console.log(...num1);                       // 10 20 30 40 50
console.log(10, 20, 30, 40, 50);            // 10 20 30 40 50
console.log(..."SHIVAGUPTA");               // S H I V A G U P T A



let arr1 = [12, 34, 56, 78, 9, 3, 1, 2, 3, 57, 88, 9, 96];

console.log(...arr1);                            //  12 34 56 78 9 3 1 2 3 57 88 9 96
console.log([...arr1]);                           // [ 12, 34, 56, 78,  9, 3, 1,  2,  3, 57, 88, 9, 96 ]
console.log({ ...arr1 });                         // {'0': 12,'1': 34,'2': 56,'3': 78,'4': 9,'5': 3,'6': 1,'7': 2,'8': 3,'9': 57,'10': 88,'11': 9,'12': 96}


let userName = 'Shiva_Gupta';
console.log(...userName);                        // S h i v a _ G u p t a
console.log([...userName]);                       // [ 'S', 'h', 'i', 'v','a', '_', 'G', 'u', 'p', 't', 'a' ]
console.log({ ...userName });                     // {'0': 'S','1': 'h','2': 'i','3': 'v','4': 'a','5': '_','6': 'G','7': 'u','8': 'p','9': 't','10': 'a'}



let myobj = {
    name: 'shiva',
    last: 'gupta',
    age: 25,
    isLogIn: true
};
// console.log(...myobj);   // Error 



// ******************* join() *****************


arr1 = [12, 34, 56, 78, 9, "shiva", "gupta", "ritika"];
let createString = arr1.join();
console.log(createString);                         // 12,34,56,78,9,shiva,gupta,ritika
console.log(typeof createString);                   //string

//console.log(createString.join('-'));              // createString is a string

console.log(arr1.join(''));             // 123456789shivaguptaritika
console.log(arr1.join('+'));            // 12+34+56+78+9+shiva+gupta+ritika




//************************* spread() method vs join() ****************** */
let num_str = [12, 34, 56, 78, 9, "shiva", "gupta", "ritika"];

console.log(...num_str);                   // 12 34 56 78 9 shiva gupta ritika

console.log(num_str.join());                // '12,34,56,78,9,shiva,gupta,ritika'
console.log(num_str.join(''));              // '123456789shivaguptaritika'
