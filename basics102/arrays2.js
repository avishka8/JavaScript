const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

const heroes = marvel.concat(dc);
console.log(heroes);

const new_heroes = [...dc, ...marvel] // spread operator
console.log(new_heroes);

const numArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const newNumArr = numArr.flat(Infinity)
console.log(newNumArr);

console.log(Array.isArray("Avishka"));
console.log(Array.from("Avishka"));
console.log(Array.from(name="Avishka")) // gives an empty array because it doesnt know if the key is supposed to be turned to an array or the value or both the key-value pair

