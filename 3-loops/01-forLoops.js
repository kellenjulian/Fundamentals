// for(var i = 0; i < 10; i++){
    // console.log(i);
// };

// for(var i = 0; i <= 20; i += 2){
//     console.log(i);
// }


//Challenge: using a for loop, count from 10 to 0, going down by 1's
for(var i = 10; i >= 0; i -= 1){
    console.log(i);
}

//Challenge: using a for loop, count from 0, going dwown by 2's to -24
for(var i = 0; i >= -24; i-= 2){
    console.log(i);
}


// Challenge: using a for loop, go through a name and display
// each letter individually
// hint: string indexing

// for(let i = 'kellen'; i.charAt <= i.length(5); i++){
//     console.log(i);
// }

// let myName = "Kellen";

let nameLength = myName.length;

for(i = 0; i < nameLength; i++){
    console.log(myName.charAt(i));
}


let name = "Kellen";
let arrayName = name.split('');

for(i = 0; i < arrayName.length; i++){
    console.log(arrayName[i])
}


var anotherName = "Alecx";

for(let i = 0; i < anotherName.length; i++){
    console.log(anotherName[i]);
}




let sum = 0;
for(i = 1; i <= 50; i++){
    sum += i;

    if(i == 50){
        console.log(sum);
    }
}