// /functions are a set of statements that perform a tasks or calculates a value

//Declarations

hi()
console.log(hi);
function hi() {
    console.log('Hi!')
}


//Expression

var hi = function hi() {
    console.log('I already said hi!')
}

//Declarations = Hoisted
// Expressions != hoisted

//Functions calling


hi()
hi()
hi()
hi()


function hey() {
    console.log('Dave, tell cooper i said hey');
}

hey();                    //You can't console.log a function



function theseNumbers() {
    for(i = 1; i <= 10; i++){
        console.log(i);
    }
}

theseNumbers();

let i = 1;

function counting(){
    while(i <= 10){
        console.log(i)
        i++;
    }
}

counting();

/** Challenge given an array, create a function that lists out the individual values */

let arr = ["This", "Is", "Really", "Cool"]

function arrSelect() {
    for(i = [0]; i <= [3]; i++) {
        console.log(i);
       
    }
}

arrSelect();


let arr = ["This", "Is", "Really", "Cool"]

function arrayList(){
    for(list in arr){
        console.log(arr[list])
    }
}

arrayList();





