//Parameters are like empty storage boxes we can name whatever we want. They need to use the same
//name inside of the function.

//We can also have multiple different parameters for a single function. We provide the parameter when we call our function

function pet(animal){
    console.log(`I have a ${animal} for a pet`);
}

pet("dog");
pet("cat");
pet("ocelot");


function tacoBell(food){                                             //can have multiple parameters, set up by commas
    console.log(`I would like a ${food}, please`);
}

tacoBell("7-layer Burrito");
tacoBell('Spicy Tostada');



function fullName(firstName, lastName){
    var full = console.log(`Hello, my name is ${firstName} ${lastName}`);
}

fullName("Tom", "McClellan");


function myName(first, last){
    let fullName = first + ' ' + last;
    console.log(`Hello my name is ${fullName}`);
}

myName("Kellen", "Julian");


