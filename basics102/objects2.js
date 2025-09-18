// object singleton or declare through constructors

// const tinUser = new Object()

// non-singleton

const tinUser={}
tinUser.id = "123abc"
tinUser.name = "Jeez"
tinUser.isLoggedin = false

// console.log(tinUser);

const user = {
    email: "gmail.com",
    fullname: {
        user_fullname: {
            first_name: "Blair",
            last_name: "Waldorf"
        }
    }
}

console.log(user.fullname.user_fullname.first_name);

// combining objects

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = Object.assign({}, obj1, obj2) // the curly braces are optional but gives a definite object

// can use spreading too like > const obj3 = {...obj1, ...obj2}

console.log(obj3);

console.log(Object.keys(tinUser));
console.log(Object.values(tinUser));

console.log(tinUser.hasOwnProperty("name"));

// de-structuring of object 

const course = {
    cname: "js",
    cprice: 999,
    cfaculty: "abc"
}

const {cfaculty:fac} = course
console.log(fac);


// json api syntax in object

//{
  //  "name":"avishka",
  //  "channel":"avtv",
  //  "github":"avishka8"
//}

// json api syntax in array 

[
    {},
    {},
    {}
]


// json formatter to study and understand json codes

