//************** create element ****************

let div = document.createElement('div');
console.log(div);


// ******************  set attributes ***********

div.className = 'container';
// div.id = 'box';
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute('title', 'generated-title');


// div.innerText = "Hello Good Evening!";
// or
let addText = document.createTextNode("Hello Good Moning!");
div.appendChild(addText);


//    *****************  embed in document page ***************
document.body.appendChild(div);