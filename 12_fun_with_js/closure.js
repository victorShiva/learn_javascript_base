
// ****************** lexical scope


// function init() {
//     let name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     displayName();
// }
// init();


// function outer() {
//     let userName = "shivam";
//     function inner() {
//         let secret = "my123";
//         console.log("Inner : ", userName);
//     }
//     function innerTwo() {
//         console.log("InnerTwo : ", userName);
//         // console.log(`InnerTwo : ${secret}`);
//     }
//     inner();
//     innerTwo();
//     // console.log(`Outer : ${secret}`);
// }
// outer();
// // console.log(`Too Outer : ${userName}`);





// ********************** clouser


function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

