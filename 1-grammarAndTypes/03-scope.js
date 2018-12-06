var x = 12;

function scope(){
     x = 33
    console.log(x);
}
scope()//33
console.log(x); //12

var x = 12   //global scope

function scope (){
    const x = 33        //local scope
    if (true){
        const x = 45;     //local scope nested w/in a local scope,     let protects within the scope, doesn't bleed
        console.log(x);
    }
    console.log(x);    //prints out 45 because of scope bleed? var bleeds into scopes
}

scope()
console.log(x);     //prints out 12 which is in global scope

/*
    variable grammar    obeys functional scope  obeys block scope   can be mutated (changed after intialization)
    var                 x                       -                   x
    let                 x                       x                   x
    const               x                       x                   -
*/



