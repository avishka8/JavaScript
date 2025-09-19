// function is a package of code

function sayName(){
    console.log("A");
    console.log("V");
    console.log("I");  
}

// sayName()

// function sum(num1, num2) {  // num1, num2 are parameters
   // console.log(num1+num2);
// }

//sum(3, "4") // 3, 4 are arguments

function sum(num1,num2){
    let result = num1+num2
    return result // nothing is printed if written after return
    // return num1+num2 
}

const result = sum(3,4)

console.log(`Result: ${result}`);



// 
function logUser(username){
    if(username === undefined){ // can also write !username
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(logUser("Avishka"));
console.log(logUser());


function calc_cart(val1, val2, ...n1){ // rest operator bundles all the values into one array n1=[200,300,400]
    return val1+val2+n1
}

console.log(calc_cart(200, 300, 400, 2000));



// object with functions

const person = {
    name: "avishka",
    year: 2003
}

function handle_obj(anyobj){
    console.log(`Person name is ${anyobj.name} and year of birth is ${anyobj.year}`);
}

handle_obj(person)


// array with functions 

const new_array = [200,400,100,600]

function arrayfunc(getVal){
    return getVal[2]
}

console.log(arrayfunc(new_array));
console.log(arrayfunc([2,5,6,8,2,4]));

