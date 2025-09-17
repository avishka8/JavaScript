const name = "avishka"
const repoCount = 50

// console.log(name+repoCount+"value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String("av-tv")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('v'));

console.log(gameName.charAt(2));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-3,2)

const string1 = "     avishka    "
console.log(string1.trim());

const url = "https://avishka.com/avishka%100%"
console.log(url.replace('%100%', 'vivi'));
console.log(url);

console.log(gameName.split('-')); 