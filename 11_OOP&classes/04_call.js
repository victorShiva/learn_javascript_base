function SetUsername(username) {
    // complex DB calls
    this.userName = username
    console.log(`SetUsername is called`);

    this.myName = () => {
        console.log(`my name is ${this.userName}`);
    }

}

SetUsername.prototype.getName = function () {
    console.log(`Your name is ${this.userName}`);                // suspence
}

function createUser(username, email, password) {
    SetUsername.call(this, username);
    this.userEmail = email;
    this.userPass = password;

    this.greeting = function () {
        console.log(`Hello ${this.userName}`);
    }
}

createUser.prototype = Object.create(SetUsername.prototype);            // suspence resolve

createUser.prototype.getPassword = function () {
    console.log(`your password is : ${this.userPass}@kl`);
}


const personOne = new createUser("sachin", "sachin@fb.com", "@123");


console.dir(SetUsername);
console.dir(createUser);

console.log(personOne);
personOne.greeting();
personOne.myName();
personOne.getName();                 // suspance
personOne.getPassword();                // Error resolve after object.crete() getPassword define



console.log(personOne instanceof createUser);
console.log(personOne instanceof SetUsername);














// const info = {
//     name: "Alok",
//     age: 24,
//     email: "alok@delta.com",
//     logIn: true,
//     getInfo: () => {
//         console.log(`hey this is ${this.name}`);
//     }
// }
// info.getInfo();