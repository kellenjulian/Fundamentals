



let numberExample = 2;
let boolExample = true;
let conditionExample = 0;


if (typeof conditionExample === 'string') {
    console.log('Yep, A is A.')
} else if (typeof conditionExample === 'number'){
    console.log('Numbers are cool.')
} else if (typeof conditionExample === 'boolean') {
    console.log('Truthiness')
}




//FIZZ BUZZ


var fb = 15
if(fb % 3 === 0 && fb % 5 === 0){
    console.log('Fizz Buzz');
} else if(fb % 3 === 0){
    console.log('Fizz')
} else if(fb % 5 === 0){
    console.log('Buzz');
};

for(x = 0; x < 100; x++){
    if(x % 3 && x % 3 == 0){
        console.log("Fizz Buzz");
    } else if (x % 5 == 0){
        console.log("Buzz");
    } else if (x % 3 == 0){
        console.log("Fizz");
    } else {
        console.log(x);
    }
}



function fizzBuzz() {
    for (var i = 0; i <= 100; i++) {
        if ( i % 15 == 0 ) {
            console.log('FizzBuzz');
        } else if ( i % 3 == 0) {
            console.log('Fizz'); 
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();