let parent = document.querySelector('.parent');
console.log(parent);                                //    <div class="parent">...</div>


let parentChildrenColle = parent.children;
console.log(parentChildrenColle);


// console.log(parent.children);                   // collection of children of parent
// console.log(parent.children[1]);                // second child of parent div
// console.log(parent.children[1].innerText);      // text of second child 



// *************** for loop in collection 

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerText);
// }


parent.children[1].style.color = 'green';


// **********    get child of parent 

console.log(parent.firstElementChild);                      //<div class="day">Monday</div>
console.log(parent.lastElementChild);                       //<div class="day">Thursday</div>





// ***************** get sibiling of element

let el = document.querySelector('.container #div-03').previousElementSibling;
console.log(el);

document.write('<p>Previous Sibling of div-03 </p><ol>');
while (el) {
    document.write('<li>' + el.nodeName + '</li>');
    el = el.previousElementSibling;
}
document.write('</ol>');





let nex = document.querySelector('.container #div-03').nextElementSibling;
console.log(nex);

document.write('<p>next Sibling of div-03 </p><ol>');
while (nex) {
    document.write('<li>' + nex.nodeName + '</li>');  // tagName
    nex = nex.nextElementSibling;
}
document.write('</ol>');



// ***************** get the parent element of any element
let children = document.querySelector('.day');
let findParent = children.parentElement;    //parentNode
console.log(findParent);



// *******************   childNodes
parent = document.querySelector('.parent');
console.log("Nodes : - ", parent.childNodes);
