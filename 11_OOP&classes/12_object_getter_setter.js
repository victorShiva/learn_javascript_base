const User = {
    _email: "shiva@google.com",
    _password: "shiv5775",


    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    }
}

console.log(User);
console.log(User.email);
console.log(User._email);


const tea = Object.create(User);
console.log(tea.email);
