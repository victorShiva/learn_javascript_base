// reduce methods
const myNums = [1, 2, 3, 4, 5];

let myTotal = myNums.reduce((accu, curr) => {
    console.log(`accu : ${accu} , curr : ${curr}`);
    return accu + curr;
}, 0)
console.log(myTotal);


//**************** */ arrray of objects  
const shoppingCart = [
    {
        itemName: "JavaScript Programming",
        price: 30
    },
    {
        itemName: "Python Basics",
        price: 25
    },
    {
        itemName: "HTML5 Essentials",
        price: 20
    },
    {
        itemName: "CSS Styling",
        price: 35
    },
    {
        itemName: "Java Fundamentals",
        price: 40
    }
];


// let totalPrice = 0;
// for (const book of shoppingCart) {
//     totalPrice = book.price + totalPrice;
// }
// console.log(totalPrice);

let totalPrice = shoppingCart.reduce((accu, item) => (accu + item.price), 0);
console.log(totalPrice);

