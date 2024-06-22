function multipleBy5(num) {
    return num * 5;
}
multipleBy5.power = 10;

// console.log(multipleBy5(3));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


// ********************* new keyword *******************

function createUser(userName, score) {
    this.userName = userName;
    this.score = score;
    return this;
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`Score is ${this.score}`);
}

console.dir(createUser);                // see the browser console

/*
const Manish = createUser("manish", 100);
const Akash = createUser("akash", 200);
console.log(Manish.score);
Akash.printMe();*/


const Manish = new createUser("manish", 100);
const Akash = new createUser("akash", 200);
// console.log(Manish.score);
Akash.printMe();
Akash.increment();
Akash.printMe();

Manish.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/





// function myGreeting() {
//     console.log(`Hello every one n=good morning`);
// }

// console.dir(myGreeting);

// const info = {
//     userName: "harish",
//     logIn: true,
//     score: 202,
//     getScore: function () {
//         console.log(`your score is ${this.score}`);
//     }
// }
// console.dir(info);
//// info.increment()   //Error