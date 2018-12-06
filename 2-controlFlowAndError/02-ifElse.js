let weather = 75;

if (weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary!')
}

/*
Challenge:
Write an if else statement that checks your name;
If it is your name, console.log 'Hello, my name is <your name>';
If the name does not match, console.log 'Hello, what is your name?'
*/

let name = 'Kellen';

if (name == 'Kellen') {
    console.log('Hello, my name is Kellen!')
} else {
    console.log('Hello, what is your name?')
};

/*
Challenge:
Capitalize the FIRST LETTER of name ONLY
*/
let name = 'tyleR';

if (name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase()
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        console.log(otherLetters);
}

/*************************************************************************** */

//Else if

/*
Challenge:
Set a variable age and give it an age of your choice
Set an else if statement that conveys the following:
If the age is 17 or younger, console.log 'Sorry, youre too young to do anything.
If the age is at least 18, console.log 'Yay! You can vote!'
If the age is at least 21, console.log 'Yay! You can drink!'
If the age is at least 25, console.log 'Yay! You can rent a car!'
*/
var age = 19;

if(age >= 25){
    console.log("Yay! You can rent a car!")
}else if(age >= 21){
    console.log("Yay! You can drink!")
}else if(age >= 18){
    console.log("Yay! You can vote!")
}else{
    console.log("Sorry, you're too young to do anything.")
}



/*
var name = 'kellen';
var upper = name.charAt(0).toUpperCase() + name.substr(1);

console.log(upper);
*/