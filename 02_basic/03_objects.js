//singleton
//Object.create


//objects literals
const mySyb = Symbol('key1');
const JsUser ={
    name:'shiva',
    "full name":'ShivaGupta',
    age:20,
    [mySyb]:"mykey1",
    email:'shivshankar.agrahari.yubi.com',
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySyb]);

JsUser.email="shivagupta.yubi.com";
console.log(JsUser);

// Object.freeze(JsUser);
// JsUser.email="shivagupta.microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());

