class User {
    constructor(username) {
        this.userName = username;
    }
    logMe() {
        console.log(`Username is : ${this.userName}`);
    }
    static createId() {
        return `5775`;
    }
}

const userOne = new User("danish");
console.log(userOne);
///// console.log(userOne.createId());          // error

class Master extends User {
    constructor(name, email, loginID) {
        super(name);
        this.userEmail = email;
        this.userLoginId = loginID;

        this.greet = function () {
            console.log(`hello ${this.userName}`);
        }
    }

    getEmail() {
        return (`your email is ${this.userEmail}`);
    }
}

const masterOne = new Master("shiva", "shiva@google.com", 5775);
console.log(masterOne);
console.log(masterOne.getEmail());
masterOne.logMe();
/////// console.log(masterOne.createId());              // Error


console.log(masterOne instanceof Master);       //true
console.log(masterOne instanceof User);         //true
console.log(userOne instanceof User);           //true
console.log(userOne instanceof Master);         //false
console.log(userOne instanceof User);           //true
