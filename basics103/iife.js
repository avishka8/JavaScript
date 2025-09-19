// Immediately Invoked Function Expressions [IIFE] 

(function bean() { // named iife
    console.log(`DB CONNECTED`)
})();

// to remove, global scope pollution, we use iife

( (name) => { // un-named iife 
    console.log(`DB CONNECTED 2 ${name}`);    
})("AVISHKA");