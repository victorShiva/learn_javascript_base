let elements = document.getElementsByClassName('heading');
console.log(elements);

let h3 = document.querySelector('h3');
console.log(h3);

let allH3 = document.querySelectorAll('h3');
console.log(allH3);

let password = document.querySelector('input[type="password"]');
console.log(password);


let ul = document.querySelector('ul');
console.log(ul);

let firstLi = ul.querySelector('li');
console.log(firstLi);
firstLi.innerHTML='<b>ONE</b>';
firstLi.style.color='red';

let allLi = document.querySelectorAll('li');
console.log(allLi);

allLi.forEach((item)=>{
    console.log(item.innerText);
    item.style.color='green';
})


let collectionH3 = document.querySelectorAll('.heading3');
collectionH3.forEach((item)=>{
    item.style.backgroundColor = 'blue';
})



//  ***************** getElementsByClassName 
let listItems = document.getElementsByClassName('list-item');
console.log(listItems);

// listItems.forEach((li)=>{
//     console.log(li);                            //TypeError: listItems.forEach is not a function
// })


let convertArrayListItems = Array.from(listItems);
console.log(convertArrayListItems);

convertArrayListItems.forEach((li)=>{
    console.log(li);
    li.style.color='orange';
})