// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "jack123" 
tinderUser.name = "jackson jerry"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser ={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Shiva",
            lastName:"Gupta"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};


// const obj3 = {obj1,obj2}                    //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//console.log(obj3);


// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);                              // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj1);                              // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);                              // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1);                              // { '1': 'a', '2': 'b' }


// const obj3 = {...obj1,...obj2}
// console.log(obj3);                          //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
]
users[1].email





// *********** get the array of object's Keys and array of object's values

console.log(tinderUser);
const arrayOfKeys = Object.keys(tinderUser);
console.log(arrayOfKeys);                               // [ 'id', 'name', 'isLoggedIn' ]


const arrayOfValues = Object.values(tinderUser);
console.log(arrayOfValues);                             // [ 'jack123', 'jackson jerry', false ]


const arrayOfTries = Object.entries(tinderUser);        //  array of tries value
console.log(arrayOfTries);                              //  [[ 'id', 'jack123' ],[ 'name', 'jackson jerry' ],[ 'isLoggedIn', false ]]


// if you check the properties are exist in the object then use the hasOwnnProperty()

console.log(tinderUser.hasOwnProperty('isLoggedIn'));                   //true
console.log(tinderUser.hasOwnProperty('isLoggedOut'));                  //false





///**************************Object destructuring ***************** */

const course ={
    courseName :"Javascript ",
    price:"999",
    courseInstructor:"Raghav"
}
course.courseInstructor;         //Raghav

const {courseInstructor} = course;
console.log(courseInstructor);

const {courseInstructor:courseTeacher} =course;
console.log(courseTeacher);


//****************** JSON */
// {
//     "name":"shiva",
//     "courseName":"MEARN-STACK",
//     "price":"free",
//     "age":25
// }