// singleton
         // Object.create


// object literals

const symb = Symbol("key1")

const user = {
    name: "Avishka",
    age: 22,
    networth: "$1B",
    [symb]:"mykey1",
    location: "Gurgaon",
    isLoggedIn: "True",
    daysIn: ["Saturday", "Sunday", "Friday"]
}

console.log(user.networth);
console.log(user["age"]);
console.log(user[symb]);

user.networth = "$2B" // changes values
//Object.freeze(user) // no changes will be made in user object

console.log(user);

user.greeting = function(){
    console.log("Hello User");    
}

user.greeting2 = function(){
    console.log(`Hello user, ${this.name}`);    
}

console.log(user.greeting());
console.log(user.greeting2());
