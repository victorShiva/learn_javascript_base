// forEach loop
const coding = ["JavaScript", "Python", "Java", "C++", "C#", "Ruby"];
// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((val)=>{
//     console.log(val)
// });

// coding.forEach(printMe)
// function printMe(value){
//     console.log(value);
// }


// coding.forEach((item,index,arrr)=>{
//     console.log(item,index,arrr);
// })



// object of Array
const objectArray = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Eve" },
    { id: 5, name: "Mike" }
];
objectArray.forEach((item)=>{
    console.log(item.name);
})