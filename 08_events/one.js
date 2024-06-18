// +++++++++++++++   event-type , timeStamp , preventDefault
// ++++++++++++++++  target , toElement , srcElement , currentTarget ,
//++++++++++++++++++ clientX , clientY , screenX , screenY 
//++++++++++++++++++ altkey , ctrlkey , altkey , keyCode 



// const photoshop = document.getElementById('photoshop');
// photoshop.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.indexOf(stopPropagation));
// }, false);



//******************************** eventPropagation -> 2 context (event-bubbling , event-cupturing) **********************

// ++++++++++++++ event bubbling

// const ul = document.querySelector('#images');
// const owl = document.querySelector('#owl');

// ul.addEventListener('click', function (e) {
//     console.log("clicked inside ul ");
// }, false);

// owl.addEventListener('click', function (e) {
//     console.log(" owl clicked ");
// }, false);



// +++++++++++++++ event - cupturing

// const ul = document.querySelector('#images');
// const owl = document.querySelector('#owl');

// ul.addEventListener('click', function (e) {
//     console.log("clicked inside ul ");
// }, true);

// owl.addEventListener('click', function (e) {
//     console.log(" owl clicked ");
// }, true);



// +++++++++++++++++ stopPropagation 

// const ul = document.querySelector('#images');
// const owl = document.querySelector('#owl');

// ul.addEventListener('click', function (e) {
//     console.log("clicked inside ul ");
// }, false);

// owl.addEventListener('click', function (e) {
//     e.stopPropagation();
//     console.log(" owl clicked ");
// }, false);



// ++++++++++++++++ preventDefault

// const google = document.querySelector('#google');
// google.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('google clicked');
// },false)



// ??????????? click the image and delete the image ??????????

// document.querySelector('#images').addEventListener('click', function (e) {
//     // console.log(e.target);
//     // console.log(e.target.parentElement);
//     console.log(e.target.parentNode);
//     let removeIt = e.target.parentNode;
//     // // removeIt.remove();
//     removeIt.parentNode.removeChild(removeIt);
// }, false)


document.querySelector('#images').addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
}, false)