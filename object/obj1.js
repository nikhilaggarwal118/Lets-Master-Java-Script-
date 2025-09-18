// singleton - A design pattern to ensure a single instance.
// Object.create

// object literals - A normal object created directly.

const mySym = Symbol("HareRam") //Primitive datatype that store unique value in it


//Here name is key and hitesh is value
const JsUser = {
    name: "Hitesh", //name is string and by default internally it is treated as "name" and age as "age" all other
    "full name": "Hitesh Choudhary",
    [mySym]:Symbol("RadhaMadhav"),
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// How to access the objects

// Method1
 console.log(JsUser.email)
 //Method2
console.log(JsUser["email"]) 
/* here [] is good approach to use ,as if key in object is like full name
 then we can't access using  .dot and when using [] then put key in "" as iternally key in object are treated as string */
console.log( JsUser["age"])
console.log(typeof JsUser[mySym]);
console.log(JsUser)




// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
//  Object.freeze(JsUser) //now its  value won't update
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
