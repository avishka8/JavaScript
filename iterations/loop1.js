// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element);
}

for (let i=0; i<10; i++) {
    //console.log(`Outer Loop value: ${i}`);
    for (let j=0; j<=10; j++){
        //console.log(`Inner loop value ${j} and Inner Loop ${i}`);
    }   
}

let arr = ["flash", "batman", "superman"]
console.log(arr.length);
for (let index = 0; index <= arr.length; index++) {
    const element = arr[index];
    console.log(element);   
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index ==5 ) {
        console.log(`detected 5`);   
        break
    }
    console.log(`value of i is ${index}`);
}


// similarly can use continue in the place of break, even after detecting 5, it will continue from 6