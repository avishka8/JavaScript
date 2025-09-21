// if statement 

const isUserLoggedIn = true

if(2==2){
    console.log("Equal")
} else{
    console.log("Not Equal")
}

// conditions >, <, <=, >=, ==, !=, === checks the datatype as well, !== 

// shorthand notation 
const balance = 2000
// if(balance>500) console.log("test");

if (balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else if(balance < 1000){
    console.log("less than 1000");
} else{
    console.log("balance higher than 1000");
}


// real life example of an e-commerce website 

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if( userLoggedIn && debitcard ){
    console.log("allow to buy");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user is logged in");    
}


// Nulling Coalescing Operator(??): null undefined

let val1;
val1 = null ?? 10 // to handle null values by replacing it with 10
val2 = undefined ?? 15
console.log(val1);
console.log(val2);



// Terniary Operator 

// condition ? true : false

const coffeePrice = 100
coffeePrice >= 80 ? console.log("greater than 80") : console.log("less than 80");

