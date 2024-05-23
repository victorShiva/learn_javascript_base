// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log("Good Morning");
})();

(()=>{
    console.log("Good Evening");
})();

((name)=>{
    console.log("Hey Good Evening " + name);
})("shiva");