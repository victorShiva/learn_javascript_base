function SetUsername(username) {
    // complex DB calls
    this.userName = username
    console.log(`SetUsername is called`);

    this.myName = () => {
        console.log(`my name is ${this.userName}`);
    }

}

function createUser(username, email, password) {
    SetUsername.call(this, username);
    this.userEmail = email;
    this.userPass = password;

    this.greeting = function () {
        console.log(`Hello ${this.userName}`);
    }
}

const personOne = new createUser("sachin", "sachin@fb.com", "@123");

console.log(personOne);
personOne.greeting();
personOne.myName();

















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