function User(email, password) {
    this._Email = email;
    this._Password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._Email.toUpperCase();
        },
        set: function (value) {
            this._Email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._Password.toUpperCase();
        },
        set: function (value) {
            this._Password = value;
        }
    })
}

const sanjeev = new User("sanjeev@meta.com", "xhgk");
console.log(sanjeev);               //{ _Email: 'sanjeev@meta.com', _Password: 'xhgk' }

console.log(sanjeev.email);         //SANJEEV@META.COM
console.log(sanjeev._Email);        //sanjeev@meta.com

console.log(sanjeev.password);        //XHGK
console.log(sanjeev._Password);       //xhgk


sanjeev.email = 's@google.com';
sanjeev.password = 'tdmdmc';
console.log(sanjeev);