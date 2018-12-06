    //Booleans
    //What is a boolean?
    var on = true;
    console.log(on); // true
    let off = false;
    console.log(off); //false

    //booleans can represent: true/false, yes/no, on/off

    //null = empty value (not 0; not undefined)
    var empty = null;
    console.log(empty); // Null

    var undef = undefined;
    console.log(undef); // undefined

    let grass;
    console.log(grass); // undefined

    /*
    We've talked before about how every variable is basically a storage container in JavaScript
    think of variables with null and undefined as packages coming out of UPS
    null packages are packages that were intentionally packed up with nothing, but have been assembled
    undefined packages are packages that have nothing in them, but have not yet been assembled to leave UPS
    */

    // numbers
    var degrees = 90;
    console.log(degrees);

    var precise = 999999999999999; // 15 9's
    console.log(precise); // 999999999999999

    var rounded = 9999999999999999; // (one more 9)
    console.log(rounded); //100000000000000

    var notQuite = 0.2 + 0.1;
    console.log(notQuite); // 0.300000000000004

    var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
    console.log(numbersAreHard); // 0.3

    let stringOne = "double quotes";
    let stringTwo = 'single quotes';
    console.log(stringOne, stringTwo); // double quotes single quotes

    // Numbers vs. Strings
    let first = 1050 + 100;
    let second = '1050' + '100';    // string value does not read it as numbers, will just print the string '1050100'

    console.log(first+second);         
    console.log(second);
    console.log(typeof first);      // tells you what type the input is, ex. string, boolean, number, etc.
    console.log(typeof second); 

    /*
    Addition vs. Concatenation

    When JS sees combining two or more numbers, it adds the values together using the built-in
    math functionality; when it sees adding together one or more strings, it changes and the plus
    sign becomes an assignment operator--it smashes the values together without trying to
    synthesize the values
    */

    let third = 1050 + '100';

    console.log(third); // 1050100
    console.log(typeof third); // string


/*
Challenge:
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode

Set each variable to its respective type.

console.log your whole address (with the space between variable).
*/

var firstName = 'Kellen';
var lastName = 'Julian';
var houseNumber = 10620;
var street = 'Eagle Dr';
var city = 'Indianapolis';
var state = 'Indiana';
var zipcode = 46234;

console.log(firstName, lastName, houseNumber, street, city + ",", state, zipcode);
console.log(`${firstName} ${lastName}, \n${houseNumber} ${street}, \n${city} ${state} ${zipcode}`)    // using string interpolation makes for easier formatting

// Objects
/* 
What is an object?

A container that can hold multiple datatypes

Denoted by {}
Has keys and values (color (key): 'blue' (value)), separated with a colon
Each key separated with a comma
*/
let burritosNow = {
    size:  'large',
    quantity: 4,
    now: true
};
console.log(burritosNow);
console.log(typeof burritosNow); //object
/*
Arrays are great for lists

Denoted by a []
Has values ('blue', 'green', 'yellow'), separated with commas
/*

var burritos = ['large', 4, true];
console.log(burritos); // ['large', 4, true]

console.log(typeof burritos); // OBJECT
*/







