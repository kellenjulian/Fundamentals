console.log("hello world")
// cmd ? highlighted : comment out
/*asdasd
asdasd
asdasd*/

//console.log is a great took to debug later down the line. For now we're going to use it as a learning tool

var a = 1
var A = 2

console.log(A)

var b = 1
var b = 2    //can also be written as b = 2 and will give same output
console.log(b)  //2

let c = 3   
c = 4           //let won't allow to be written as let c = 4, instead, it is written as just c=4
console.log(c)

var firstName = 'Kellen'
const lastName = 'Julian'
console.log(firstName,lastName)
console.log(firstName + " " + lastName)
firstName = 'Luke'
//lastName = 'Jackson'      lastName won't change because it is const

/*
Declarations are the LEFT SIDE of a variable
    It is simply the var x
    It is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
    It sets the value of the variable
    It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/

var x 
console.log('Declaration:', x);
                                             //var x has been created, but no value assigned to it until line 42 (declaration vs initialization)
x = 10
console.log('Initialization 1:', x)

var y = 'Hello'
console.log('Both:',x,y)
