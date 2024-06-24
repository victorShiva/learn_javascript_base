Array.prototype.extraProperty = "Shivba";
// const fruits = ["Mango", "Apple", "Orange", "Banana"];
// console.log(fruits);

// for (let k in fruits) {                 // print the Array poperty(key)
//     if (fruits.hasOwnProperty(k)) {
//         console.log(k);
//     }
// }





// ***************** create customForEach function

// function customForEach(array, callback) {
//     if (!Array.isArray(array)) {
//         throw new TypeError("First Argument must be an Array");
//     }
//     if (!typeof callback === 'function') {
//         throw new TypeError("Second Argument must be a function");
//     }
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i, array);
//     }
// }

// function iterateElement(element, index, array) {
//     console.log("Element :", element, " Index :", index, " array :", array);
// }

// const fruits = ["Mango", "Apple", "Orange", "Banana"];

// customForEach(fruits, iterateElement);











// //*********************** Create custom function using prototype */

// Array.prototype.customForEach = function (callback) {
//     for (let i = 0; i <= this.length; i++) {
//         if (this.hasOwnProperty) {                      // (i)
//             callback(this[i], i, this);
//         }
//     }
//     console.log(this);
// }

// const fruits = ["Mango", "Apple", "Orange", "Banana"];
// fruits.customForEach((val, ind) => console.log(val, ind));





Array.prototype.customFoEachTwo = function (callback, thisContext) {
    if (!typeof callback === 'function') {
        throw `First Argument a function`;
    }
    const length = this.length;
    let i = 0;

    while (i <= length) {
        if (this.hasOwnProperty(i)) {
            callback.call(thisContext, this[i], i, this);
        }
        i++;
    }
}


const fruits = ["Mango", "Apple", "Orange", "Banana"];
fruits.customFoEachTwo((val, ind) => console.log(ind, val));