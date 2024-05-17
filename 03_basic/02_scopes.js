// var c = 57;
// let a=45;
// {
//     let a =10;
//     const b=20;
//     var c =30;
// }

// console.log(a);     //a is not defined 
// // console.log(b);     // b is not defined
// console.log(c);


var c = 57;
let a=45;
{
    let a =10;
    const b=20;
    var c =30;
    console.log("inner", a);
}

console.log(a);         // 45
// console.log(b);     // b is not defined
console.log(c);


//++++++++++++++function scope+++++++++++

function one(){
    const userName = "Raghav";

    function two(){
        const website = "Instagram";
        console.log(userName);
    }
    // console.log(website);            // errrror 
    two();
}
one();


// +++++++++++++++ block scope +++++++++++++++++

if(true){
    const userName="Raghav";
    if(userName === "Raghav"){
        const website = "Instagram";
        console.log(userName + website);
    }
    // console.log(website);         //error
}
// console.log(userName);           // error



//+++++++++++++++ regular function and function expression +++++++++

console.log(addOne(8));             // 9

function addOne(num1){              // regular function
    return num1+1;
}


// console.log(addTwo(10));             // can not access before initialization

const addTwo = function(num1){
    return num1+2;
}

console.log(addTwo(20));
