

class User {
    constructor(username) {
        this.userName = username;
        this.greet = function () {
            console.log(`hello Mr. ${this.userName}`);
        }
    }

    logMe() {
        console.log(`USERNAME is : ${this.userName}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.userEmail = email;
        this.userPass = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.userName}`);
    }
}

console.dir(User);
console.dir(Teacher);

const TeacherOne = new Teacher("raunak", "r@facebook.com", "&450");
console.log(TeacherOne);

console.log(TeacherOne.userName);
TeacherOne.logMe();
TeacherOne.addCourse();
TeacherOne.greet();


const userOne = new User("raghav");
console.log(userOne);
userOne.greet();
userOne.logMe();
// userOne.addCourse();             // Error
console.log(userOne === Teacher);       //false
console.log(TeacherOne === Teacher);     //false
console.log(TeacherOne instanceof Teacher);     //true
console.log(TeacherOne instanceof User);        //true
console.log(userOne instanceof Teacher);        // false
console.log(userOne instanceof User);           //true





///******************************** behind the scene

// function User(username) {
//     this.userName = username;
//     this.greet = function () {
//         console.log(`hello Mr. ${this.userName}`);
//     }
// }
// User.prototype.logMe = function () {
//     console.log(`USERNAME is : ${this.userName}`);
// }


// function Teacher(username, email, password) {
//     User.call(this, username);
//     this.userEmail = email;
//     this.userPass = password;
// }

// Teacher.prototype = Object.create(User.prototype);

// Teacher.prototype.addCourse = function () {
//     console.log(`A new course was added by ${this.userName}`);
// }


// console.dir(User);
// console.dir(Teacher);

// const TeacherOne = new Teacher("raunak", "r@facebook.com", "&450");
// console.log(TeacherOne);

// console.log(TeacherOne.userName);
// TeacherOne.logMe();
// TeacherOne.addCourse();
// TeacherOne.greet();


// const userOne = new User("raghav");
// console.log(userOne);
// userOne.greet();
// userOne.logMe();
// //// userOne.addCourse();       // Error
