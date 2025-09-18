// Notes :
//    To Merge many arrays to a single array
// using push, concat, ...spread method , flat methods 
//Also to convert any datatype to array foam

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) 
//   here 2nd array get push to 1st array as element and this elem. is a array and 1st array is updated

// marvel_heros.push("1","2",3) 
// here push these elem. at last as normal and update

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
//use concat to merge both 2 array's element and return a new array containing each elem. of both
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] 
// used to spread the array elem. as tukde tukde and merge all to a new array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(1)
//use flat method to spread the inner array into a single level array by 1 depth
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //is it array
console.log(Array.from("Hitesh"))   //make it into array and return array

console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));
console.log(Array.of("a", "b", 10));