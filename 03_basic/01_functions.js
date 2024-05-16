function sayMyName(){                   // function name => sayMyName
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
}
// sayMyName;                              // function reference
// sayMyName();                            // fiunction execution



// function addTwoNumber(num1,num2){                   // parameter -> num1,num2
//     console.log((num1+num2));
// }
// const result = addTwoNumber(3,4);            //7    // arguments -> 3,4
// console.log(result);                                // undefined          



function addTwoNumber(num1,num2){                   
    return (num1+num2);
}
const result = addTwoNumber(6,7);  
console.log(result);                            //13


function userLoggedInMessage(username){
    if(!undefined){                                     // username === undefined  // undefined == false
        console.log("Please Enter a Username");
        return ;
    }
    return `${username} just logged in`;
}
console.log(userLoggedInMessage());


//  ****************** part 2 ******************

// function calculateCartPrice(num1){
//         return num1;
// }
// console.log(calculateCartPrice(2));                     // 2    
// console.log(calculateCartPrice(200,500,700));           // 200



// function calculateCartPrice(...num1){                       // ... rest operator
//     return num1;                                            // num1 is array []
// }
// console.log(calculateCartPrice(100,300,500));               //[ 100, 300, 500 ]




function calculateCartPrice(val1,val2,...num1){                         // ... rest operator
    return num1;                                                        // num1 is array []
}
console.log(calculateCartPrice(100,300,500,6000));                            //[ 500 , 6000 ]



const user = {
    userName:"Shivba",
    last : "Gupta",
    price:507
}
function handleObject(anyObj){
    console.log(`UserNAme is ${anyObj.userName} and price is ${anyObj.price}`);
}
handleObject(user);                        // shivba  ......507
handleObject({
    userName : 'Rahul',
    price : 420
});


const myNewArray = [200,400,800,1200];
function returnSecondVal(getArray){
        return getArray[1];
}

console.log(returnSecondVal(myNewArray));                       // 400
console.log(returnSecondVal(["joker","Brave","Artist"]));       // brave

