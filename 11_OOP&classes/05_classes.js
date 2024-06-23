
// ES 6

class User {
    constructor(username, email, password) {
        this.userName = username;
        this.userEmail = email;
        this.userPass = password;

        this.getName = function () {
            console.log(`Your Name is ${this.userName}`);
        }
    }

    encryptPassword() {
        return `${this.userPass}abc`;
    }

    changeUserName() {
        return `${this.userName.toUpperCase()}`;
    }
}

const chai = new User("lemon", "lemon@fb.com", 4356);
const coffee = new User("cold Coffee", "cold@meta.com", 3452);

console.dir(User);
console.log(chai);
console.log(coffee);
chai.getName();


console.log(chai.encryptPassword());
console.log(chai.changeUserName());
console.log(coffee.encryptPassword());
console.log(coffee.changeUserName());








// ################  behind the scene


// function User(username, email, password) {
//     this.userName = username;
//     this.userEmail = email;
//     this.userPass = password;

//     this.getName = function () {
//         console.log(`Your Name is ${this.userName}`);
//     }
// }


// User.prototype.encryptPassword = function () {
//     return `${this.userPass}abc`;
// }

// User.prototype.changeUserName = function () {
//     return `${this.userName.toUpperCase()}`;
// }

// const chai = new User("lemon", "lemon@fb.com", 4356);
// const coffee = new User("cold Coffee", "cold@meta.com", 3452);

// console.log(chai);
// console.log(coffee);
// chai.getName();
// console.log(chai.encryptPassword());
// console.log(coffee.encryptPassword());