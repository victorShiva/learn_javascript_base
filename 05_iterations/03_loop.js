// const superHeroes = ["Superman", "Batman", "Wonder Woman", "Spiderman", "Iron Man", "Hulk", "Flash"];
// for (const hero of superHeroes) {
//     console.log(hero);    
// }

// const str = "my name is khan";
// for(const char of str){
//     console.log(char);
// }


//Maps
const map = new Map();

map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");
map.set("IN", "India");

// console.log(map);                           //Map(3) {'IN' => 'India','USA' => 'United States Of America','FR' => 'France'} 


// for (const [key,value] of map) {
//     console.log(key);                           //IN USA FR
// }


// Object
const myObj = {
    'game1': 'NF5',
    game2: 'spiderMan',
    game3: 'PUBG'
}
// for (const [key, value] of myObj) {
//     console.log(key);                        // Error Object is not iteratable
// }


for (let [key, value] of Object.entries(myObj)) {
    console.log(key);
    console.log(value);
}
