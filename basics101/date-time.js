// dates

let my_date = new Date()
console.log(my_date.toString());
console.log(my_date.toDateString());
console.log(my_date.toJSON());
console.log(my_date.toLocaleString());
console.log(typeof my_date);

let myCreatedDate = new Date(2025, 1, 8); // months start with 0 in js so 0-11 but if we do "YYYY-MM-DD" then months start with 1-12
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let time_stamp = Date.now()
console.log(time_stamp);
console.log(myCreatedDate.getTime());
console.log(Math.round(myCreatedDate.getTime()/1000));

let new_date = new Date()
console.log(new_date.getDay()); // day, month, year 

new_date.toLocaleString('default', {
    weekday: "long",
})
