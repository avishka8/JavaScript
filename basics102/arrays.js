// arrays

const my_array = [0,1,2,3,4,5]

// arrays in js creates shallow copies ; like heap ; values change in the original array as well
// deep copies ; like stack ; original values do not change

console.log(my_array[1]);

// array methods 

my_array.push(6); // adds the value in the array at the end
console.log(my_array);

my_array.pop(); // removes the last value in the array

my_array.unshift(0); // adds the value in the start of the array
my_array.shift(); // removes the first value in the array

console.log(my_array.includes(5)); // returns true or false if 5 exists in the array
console.log(my_array.indexOf(3)); // returns the index of the value

const new_array = my_array.join() // makes it a string 
console.log(new_array);
console.log(my_array);

// slice - splice 

console.log("A", my_array);
const myn1 = my_array.slice(1,3) // the last range not included
console.log(myn1);
console.log("B", my_array);

const myn2 = my_array.splice(1,3) // splits the array in two parts
console.log(myn2);
console.log("C", my_array)







