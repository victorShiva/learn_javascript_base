// var a = 10;
// let b = 20;
// const c=30;
// console.log(this.a);            // undefined
// console.log(this.b);            // undefined
// console.log(this.c);            // undefined




// const user ={
//     userName:"Raghav",
//     price:1999,
//     welcomeMessage:function(){
//         console.log(`${this.userName}, Welcome to website `);           // user.userName
//         console.log(this);                                              // { userName: 'Raghav', price: 1999, welcomeMessage: [Function: welcomeMessage] }
//     }
// } 
// user.welcomeMessage();
// user.userName="Shiva";
// user.welcomeMessage();


// console.log(this);         // {} 




// function bear(){
//     console.log(this);      // global object
// }
// bear();


// function chai(){
//     let userName="ranjeet"
//     console.log(this);                // global object
//     console.log(this.userName);      // undefined  -> this is refer to global object 
// }
// chai();


// const chai = function(){
//     let userName="ranjeet"
//     console.log(this.userName);      // undefined  -> this is refer to global object 
// }
// chai();



// +++++++++++++++ arrow function +++++++++++
const chai = () => {
    let userName="ranjeet";
    console.log(this);                // {}
    console.log(this.userName);      // undefined  -> this is refer to global object 
}
chai();



// const addTwo = (num1,num2)=>(num1+num2);                    //  implicit return ;
// console.log(addTwo(8,9));

const addTwo = (num1,num2)=>{
    return num1+num2;                                           // explicit return 
};                  
console.log(addTwo(8,9));


const add = (num1 , num2) => ({user:"vikram"});
console.log(add());