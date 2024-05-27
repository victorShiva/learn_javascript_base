const userEmail= "shiva@.ai";
if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't have user Email");
}


//falsy values :->          false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
//truthy values :->        true , "0" , "false" , [] , " " , {} , function(){} ,  



let fruits = [];
// if(fruits){
//     console.log("executed");
// }


if(fruits.length === 0){
    console.log("Array is Empty");
}


let emptyObject = {};
if(Object.keys(emptyObject).length === 0 ){
    console.log("emptyObject is Empty");
}
