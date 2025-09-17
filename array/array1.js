// key Points

/*array declaration
push , pop methods ,
 shift and unshift
 slice , splice
 */

 //---------------------------------------------------------------------------//

                                      // Array Declaration

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

                                    //Array Properties 
// console.log(myArr.length)

// Array methods
                                   //push , pop methods 
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
                                    // shift and unshift

//  myArr.unshift(9)  // To add 9 at index 0 and shift all element to right increase len by 1
// myArr.shift()      // To remove element at index 0 and shift all element to left by 1 and decrease len by 1


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // all elements of get combind and get converted store to string 

// console.log(myArr);
// console.log( newArr);



                                    // slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // To get element at index 1,2 and keep original array as it is

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // To get element at index 1,2,3 and  original array left with element except at index 1,2
console.log("C ", myArr);
console.log(myn2);