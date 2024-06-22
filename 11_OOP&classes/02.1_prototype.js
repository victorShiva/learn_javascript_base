const month = "january";
const day = "Monday";

const fruits = ["apple", "banana", "mango", "kivi", "orange"];
const vegitable = ["chilly", "cabage", "ladyfinger", "began", "tomato", "potato"];

function sayHello(user) {
    console.log(`Hello Mr. ${user} `);
}

const addition = function (a, b) {
    console.log(`a+b`);
}

const info = {
    userName: "harish",
    logIn: true,
    score: 202,
    getScore: function () {
        console.log(`your score is ${this.score}`);
    }
}

const details = {
    userName: "romini",
    userId: "romi@123",
    password: "887790abc",
    logInCount: 6,
    getUserId: function () {
        console.log(`your score is ${this.userId}`);
    }
}



// **************** set Protype in all String *******************


String.prototype.bigLater = function () {
    console.log(this.toUpperCase());
}

month.bigLater();
day.bigLater();



// **************** set Protype in all Array *******************


Array.prototype.upperValueArray = function () {
    return (this.map((val) => val.toUpperCase()))
}

const newFruits = fruits.upperValueArray();
// console.log(newFruits);

const newVegitable = fruits.upperValueArray();
// console.log(newVegitable);



// // **************** set Protype in all Function *******************

Function.prototype.userName = "ShivaGupta";

// console.dir(sayHello);
// console.log(sayHello.userName);
// console.log(addition.userName);



/// ****************** set Prototype in all Object ******************

Object.prototype.getName = function () {
    console.log(`hello dear ${this.userName}`);
}


// Note: Object.prototype are the parent of all Object.


// console.dir(Object);
// console.dir(Array);
// console.dir(String);
// console.dir(Function);



// console.dir(Object.userName);                   //ShivaGupta             
// console.dir(Array.userName);                    //ShivaGupta
// console.dir(String.userName);                   //ShivaGupta
// console.dir(Function.userName);                  //ShivaGupta



info.getName();             // hello dear harish
details.getName();          //hello dear romini
month.getName();            // hello dear undefined
day.getName();              //hello dear undefined
fruits.getName();           //hello dear undefined
vegitable.getName();        //hello dear undefined
sayHello.getName();         //hello dear ShivaGupta
addition.getName();         //hello dear ShivaGupta




// ****************** constructor function *******************
// for create object and add method only for object

function CreateUser(name, age, email, password) {
    this.userName = name;
    this.userAge = age;
    this.userMail = email;
    this.userPass = password;
    this.getEmail = function () {
        return this.userMail;
    }
    return this;
}

CreateUser.prototype.getInfo = function () {
    return ({ name: this.userName, age: this.userAge, email: this.userMail, password: this.userPass })
}

console.dir(CreateUser);
console.dir(CreateUser.prototype);

// const userOne = CreateUser("roky", 32, "oky@google.com", "@123");
// const userTwo = CreateUser("jonny", 21, "junny@meta.com", "@908");
// console.log(userOne);
// console.log(userOne.prototype);






//******************* all object is access the getInfo method which is created by CreateUser constructor function 

const userOne = new CreateUser("roky", 32, "oky@google.com", "@123");
const userTwo = new CreateUser("jonny", 21, "junny@meta.com", "@908");
console.log(userOne);
console.log(userOne.getInfo);
console.log(userOne.getInfo());



//********************* not accesss other object

///// console.log(details.getInfo())              /// Error getInfo is not a function





//****************************** info object is parent of details object and details object are access all properties of info object 


details.__proto__ = info;
// Object.setPrototypeOf(details, info);

console.dir(details)
details.getScore();

const myInfo = {
    name: "shiva",
    age: 22,
    email: "shivagupta@google.com",
    __proto__: details
}

console.dir(myInfo);
console.log(myInfo.userName);
console.log(myInfo.logIn);


