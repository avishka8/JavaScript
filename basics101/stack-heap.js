// Stack (primitive) Heap (non-primitive)


//stack (you get copy of value, original value stas same)
let myYT = "avishkatv"

let diffYT = myYT
diffYT = "avishkatookthese"
console.log(myYT);
console.log(diffYT);


// heap (reference, same value, if changed once, chaned for each)
let user1 = {
    email:"user@",
    upi: "ybl"
}

let user2 = user1
user2.email = "user2mail" 

console.log(user1.email);
console.log(user2.email);


