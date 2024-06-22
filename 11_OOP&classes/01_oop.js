// Object literal

// const user = {
//     userName: "Raghav",
//     logInId: "raghav@123",
//     logInCount: 8,
//     signedIn: true,
//     fav: ["javascript", "nodejs", "reactjs"],
//     getUserDetails() {
//         console.log("Got user details form database");
//     }
// }

// console.log(user.fav);
// console.log(Object.keys(user));
// console.log(user.getUserDetails());




const user = {
    userName: "Raghav",
    logInId: "raghav@123",
    logInCount: 8,
    signedIn: true,
    myArea: this,
    getUserDetails() {
        // console.log(`UserName : ${userName}`);                   // userName is not defined
        console.log(`UserName : ${this.userName}`);                 // this is refer to current execution
        console.log(this);                                           // current context 
    }
}
// console.log(user.userName);
// // user.getUserDetails();
// console.log(this);
// console.log(user.myArea);





// ********************* Constructor function ******************
// const promiseOne = new Promise(() => { });
// const date = new Date();


function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Wellcome ${this.userName}`);
    }

    return this;                         // implicitly define 
}

// const userOne = User("Raghav", 3, true);
// const userTwo = User("Shivba", 5, false);
// console.log(userOne);




const userOne = new User("Raghav", 3, true);
const userTwo = new User("Shivba", 5, false);
// const userThree = new User();

// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);
// userOne.greeting();


//   ********** constructor ***********
console.log(userOne.constructor);




