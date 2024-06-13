//******************** */ addd

function addLanguage(langName) {
    let li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
}
addLanguage('TypeScript');
addLanguage('NodeJS');
addLanguage('Python');

function addoptiLanguage(langName) {
    let li = document.createElement('li');
    let addText = document.createTextNode(langName);
    li.appendChild(addText);
    document.querySelector('.language').appendChild(li);
}
addoptiLanguage('JAVA');
addoptiLanguage('C++');

//***************** Edit */

let secondLang = document.querySelector('li:nth-child(2)');
// secondLang.innerHTML='Telwind';
let newLi = document.createElement('li');
newLi.textContent = 'Telwind';
secondLang.replaceWith(newLi);



// ******************Edit 
let firstLang = document.querySelector('li:first-child');
// console.log(firstLang);
firstLang.outerHTML = '<li>Network</li>'


//*********** delete */
let lastLang = document.querySelector('li:last-child');
lastLang.remove();