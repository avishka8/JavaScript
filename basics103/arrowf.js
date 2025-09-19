const user = {
    name : "avishka",
    year : 2003,

    welcomeMessage: function(){
        console.log(`${this.name} welcome to the website`);
        console.log(this);
    }
    // 'this' t refers the current context 
} 

user.welcomeMessage()
user.name = "sam"
user.welcomeMessage()

console.log(this); // gives {} i.e. empty 

// global object in a browser is Windows 

function one1(){
    let username = "AVishkA"
    console.log(this.username); // 'this' is not used in function, only in object
}

// one1()



// arrow functions now

const chai = () => {
    let username= "AVishkA";
    console.log(this.username); // doesnt get executed due even in arrow func
}

// chai()


// core arrow function now

const add2 = (n1,n2) => {
    return n1+n2
}
console.log(add2(5,6));

// implicit return 

const add3 = (n1,n2,n3) => (n1+n2+n3)
console.log(add3(5,6,4));

// object return 

const add4 = (val1,val2) => ({app: "duolingo"})
console.log(add4());
