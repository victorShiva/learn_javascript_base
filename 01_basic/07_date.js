let myDate = new Date();
console.log(myDate.toString());       //Tue May 07 2024 04:55:03 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());   //Tue May 07 2024
console.log(myDate.toISOString());     //  2024-05-07T04:58:16.421Z
console.log(myDate.toJSON());     //  2024-05-07T04:58:16.421Z

console.log(myDate.toLocaleDateString());  // 5/7/2024
console.log(myDate.toLocaleString());      //  5/7/2024, 5:00:15 AM
console.log(myDate.toLocaleTimeString());       //5:00:56 AM
console.log(myDate.toTimeString());  //05:01:28 GMT+0000 (Coordinated Universal Time)


console.log(myDate.getDate());  //7
console.log(myDate.getDay());   //2


console.log(typeof myDate);

let myCreateDate = new Date(1996,6,2);
console.log(myCreateDate);
console.log(myCreateDate.toDateString());


myCreateDate = new Date(1996,6,2,17,55);
console.log(myCreateDate.toLocaleString());


myCreateDate = new Date("2023-12-11");
console.log(myCreateDate.toDateString());


myCreateDate = new Date("03-14-2023");
console.log(myCreateDate.toDateString());




console.log(`Time stamp -----------------------`);

myCreateDate = new Date("03-14-2023");
let myTimeStamp = Date.now();  
let currentTime = new Date();


console.log(myCreateDate.getTime());
console.log(myTimeStamp);                   //milisecond
console.log(currentTime.getTime());          //milisecond


myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp/1000)); //second
console.log(myTimeStamp);


let currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() +1);
console.log(currentDate.getDate());

console.log(`today is - ${currentDate.getDate()} /${(currentDate.getMonth()+1)}/${currentDate.getFullYear()}`);


console.log(currentDate.toLocaleString('default', {
    weekday:"long"
}))









