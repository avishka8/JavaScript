var c = 300 // global scope
let a = 400
if (true) { // block scope
    let a = 10
    const b = 20
    var c = 30 
}

// console.log(a); let doesnt come out
// console.log(b); //const doesnt come out
console.log(c); // var gets printed outside the condition as well
console.log(a); 


// nested scope 

function one(){
    const username="avishka";

    function two(){
        const website="youtube";
        console.log(username);
    }
    // console.log(website); this line will show error as it is outside of the scope

    two()

}

// one()

if (true){
    const username ="avishka"
    if(username === "avishka"){
        const website ="youtube"
        console.log(username+website);
    }
    // console.log(website); this will give error due to scope
}

// console.log(username); this will also give error due to scope


//  +++++++++++ interesting +++++++++++


console.log(add1(5)); // this gets executed
function add1(value){
    return value+1;

}
console.log(add1(5));


console.log(add2(8)); // this doesnt get executed
const add2 = function(value){  //expression 
    return value+2
}
console.log(add2(8));