// const coding = ["JavaScript", "Python", "Java", "C++", "C#", "Ruby"];

// const values = coding.forEach((item)=>{
//     return item;
// })
// console.log(values);                //undefined







const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNums.filter((num)=>num>4);
// console.log(newNums);                    // [ 6, 7, 8, 9, 10 ]



// let newNums = myNums.filter((num)=>{
//     return num>5;
// })
// console.log(newNums);                   //[ 6, 7, 8, 9, 10 ]




//*************** */ using forEach 

let newNumArr = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNumArr.push(num);
    }
})
// console.log(newNumArr);                         //[ 5, 6, 7, 8, 9, 10 ]





const books = [
    {
        title: "JavaScript Programming",
        publish: "ABC Publications",
        year: 2020
    },
    {
        title: "Python Basics",
        publish: "XYZ Printing",
        year: 2019
    },
    {
        title: "HTML5 Essentials",
        publish: "123 Books",
        year: 2018
    },
    {
        title: "CSS Styling",
        publish: "Style Printers",
        year: 2021
    },
    {
        title: "Java Fundamentals",
        publish: "Java Experts",
        year: 2017
    },
    {
        title: "Data Structures in C",
        publish: "Coders Inc.",
        year: 2016
    },
    {
        title: "Ruby Programming",
        publish: "Ruby House",
        year: 2022
    },
    {
        title: "React Native Development",
        publish: "React Innovators",
        year: 2023
    },
    {
        title: "Angular Guide",
        publish: "Angular Masters",
        year: 2015
    },
    {
        title: "Node.js Essentials",
        publish: "Node Publishers",
        year: 2014
    }
];

const userBook = books.filter((book) => {
    return book.year == 2022;
});

// console.log(userBook);                                  //[ { title: 'Ruby Programming', publish: 'Ruby House', year: 2022 } ]

const bookAfter2018 = books.filter((book) => {
    return book.year > 2018;
})
console.log(bookAfter2018);                               //[{  title: 'JavaScript Programming',  publish: 'ABC Publications',  year: 2020},{ title: 'Python Basics', publish: 'XYZ Printing', year: 2019 },{ title: 'CSS Styling', publish: 'Style Printers', year: 2021 },{ title: 'Ruby Programming', publish: 'Ruby House', year: 2022 },{  title: 'React Native Development',  publish: 'React Innovators',  year: 2023}]





