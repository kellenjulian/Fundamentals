/***********************
 Switch
 switch statements helps us chose between several options for a variable and a default four main parts to a switch statement
 switch, the argument being evaluated
 case, one of the options for the variable to be 
 break, this breaks us out of the switch statement once we hit our case
 deafult, the default if we dont hit one of our cases, not necessary

 ****************************************************/

var friend="Dave";

switch (friend) {
    case "Autumn":
    console.log("Hey Autumn, when are you going rock climbing?");
    break;
    case "Dave":
    console.log("Hey Dave, how is Cooper?");
    break;
    case "Alecx":
    console.log("Hey Alecx, when are we playing DnD?");
    break;
    default:
    console.log(`I'm sorry, ${friend}, but do I know you?`); //EXPLAIN STRING INTERPOLATION
}

//every switch case requires a default


var animal="chicken";

switch (animal) {
    case "Dog":
    console.log("Oi, that's a good lookin' doggo!");
    break;
    case "Cat":
    console.log("What an adorable little kitty!");
    break;
    case "Rat":
    console.log("How cute!! I love rats!");
    break;
    case "Snake":
    console.log("Ooo! I've always wanted a snake!");
    break;
    default:
    console.log(`Hmm, I've never seen a ${animal} before!`);
}


var yep = -8;

switch (true) {
    case (yep < 0 && yep > -10):
    console.log('worked');
    break;
    case (yep > 0 ):
    console.log('Worked!');
    break;
    default:
    console.log('didnt work');
}



/*********************************************************** */
                          //Ternary
/******************************************************** */
//What is a ternary? A great way to write a single line for an if/ if else statement

let x = 6;

(x>0) ? console.log("yes") : console.log("no")

if (x > 0) {
    console.log('yes');
} else {
    console.log('no');
}

if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

let x = 7;
(x == 0) ? console.log("hello") : (x < 0) ? console.log("hi") : console.log("goodbye")      //IMPORTANT!!!!!!!!!!


/* Challenge:
Write a ternary that does the same thing as the age challenge

Age challenge (if else):

var age = 30;

if(age >= 25){
   console.log("Yay! You can rent a car!")
}else if(age >= 21){
   console.log("Yay! You can drink!")
}else if(age >= 18){
   console.log("Yay! You can vote!")
}else{
   console.log("Sorry, you're too young to do anything.")
}

*/


var age = 19;

(age >= 25) ? console.log("Yay! You can rent a car!") : (age >= 21) ? console.log("Yay! You can drink!") : (age >=18) ? console.log("Yay! You can vote!") : console.log("Sorry, you're too young to do anything.")