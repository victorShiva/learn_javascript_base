let myName = "Shivba      ";
let myId = "shiva@123   ";

// console.log(myName.length);
console.log(myName.trim().length);
// console.log(myId.trim().length);



let myHero = ["krish", "jack", "srk"];

let heroPower = {
    spiderman: "sling",
    thor: "hammer",

    getSpiderPower: function () {
        console.log(`spider power is ${this.spiderman}`);
    }
}

Object.prototype.shivba = function () {
    console.log(`Shiva is present in all Objects`);
}

Array.prototype.heyShiva = function () {
    console.log(`Good morning Shiva`);
}

// myHero.shivba();             //access             
// heroPower.shivba();              //access
// Object.shivba();             //access
// Array.shivba();              //access
// String.shivba();             //access
// Function.shivba();               //access
// myName.shivba();
console.log(heroPower);



myHero.heyShiva();                      //access
console.log(myHero);
// myName.heyShiva();                   // not access
// Array.heyShiva();                    // not access
// heroPower.heyShiva();                // not access






// *************************** inheritance ***************8

const user = {
    name: "kamal",
    email: 'kamal@google.com'
}


const teacher = {
    makeVideo: true
}

teacher.__proto__ = user;

console.log(teacher.name);                  //  kamal  // teacher accesss all properties of user object
console.log(user.makeVideo);                // undefined //not access

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport                      // TASupport is access teachingSupport properties
}


const person = {
    name: "shiva",
    email: "shiva@google.com"
}
const work = {
    language: "javaScript",
    database: "mongoDB"
}



// **************** moden syntax ************
Object.setPrototypeOf(person, work);
console.log(person.language);




//***************************string method */


let anotherName = "   harish             ";

String.prototype.trueLength = function () {
    console.log(this);
    console.log(`True Length is : ${this.trim().length}`);
}

myName.trueLength();
myId.trueLength();
anotherName.trueLength();




/*
Object.prototype === Array.prototype.__proto__              
Object.prototype === String.prototype.__proto__
Object.prototype === Function.prototype.__proto__
*/
