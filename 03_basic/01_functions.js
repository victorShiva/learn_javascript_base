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
    return `${username} just logged in`
}
console.log(userLoggedInMessage());