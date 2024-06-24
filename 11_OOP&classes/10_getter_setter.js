class User {
    constructor(email, password) {
        this.Email = email;
        this.Password = password;
    }


    get Email() {
        return this._Email.toUpperCase();
    }
    set Email(value) {
        this._Email = value;
    }

    get Password() {
        // return this._Password.toUpperCase();
        return `${this._Pass}opo`;
    }
    set Password(value) {
        this._Pass = value;
    }
}


const raghav = new User("raghav@google.com", "xvj");
console.log(raghav);                           // User { _Email: 'raghav@google.com', _Pass: 'xvj' }
console.log(raghav.Password);                   // xvjopo
console.log(raghav._Pass);                      // xvj 

console.log(raghav.Email);                      //RAGHAV@GOOGLE.COM
console.log(raghav._Email);                     //raghav@google.com



