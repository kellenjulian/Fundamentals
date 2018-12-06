function coffee(){
    console.log("I always need coffee");
}

coffee();


//Fat Arrow Function
let coffee = () => {
    console.log("Coffee is GREAT!");
}

coffee();

//One-line fat arror function or concise fat arrow function

var cat  = () => console.log("I like cats");

cat();

let name = (firstName) => 
console.log(`${firstName} is my name`);
console.log("Does this work?");

name("mel or whatever");

//for concise fat arrow functions, returns are implied



/**************************
 * returns
********************************** */

function capitalizeName(name) {
    let capName = '';
    for(let h in name){
        if(h == 0) {
            capName += name[h].toUpperCase();
        } else {
            capName += name[h].toLowerCase();
        }
    }
    // console.log(capName)
    return capName
}

const newName = capitalizeName("kellen");

console.log( newName + " how are you?");


function tipCalculator(price, quantity) {
    let tip = price * 0.2;
    var totalCost = tax + price * quantity;
    return totalCost;
}
console.log(tipCalculator(5, 2));

function tipCalc(bill) {
    tip = (bill * 0.2)
    return tip.toFixed(2)
}

let totalTip = tipCalc(20.00);
console.log(totalTip);



/*
what is an array?
has [] brackets
can hold mutiple datatypes
great for listing
*/

let students = ['Tony', 'Marshall', 'Randy', 'Ray', 23, true, ['Ryan', 'Iesha']]
console.log(typeof students)
console.log(students instanceof Array)
console.log(students[2])
console.log(students[6][0])

console.log(`Hello ${students[6][1]} you look nice today`)

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
for(f in food) {

    // console.log(food[f])
}
food.push('porkchop')         //puts new item in array
for (f in food) {
    // console.log(food[f])
}
food.splice(1,1, 'Bananas')     //replaces array item with new one; numbers used for selecting how far and how much will be replaced
for (f in food) {

    // console.log(food[f])
}
food.splice(2,0, 'Shrimp')
for (f in food) {

    console.log(food[f])
}

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
food.pop();        //deletes last item
for(f in food) {

    // console.log(food[f])
};

// let cheese = ['Asiago', 'Gouda', 'Havarti', 'Provolone']


// food.forEach(f => { console.log(f); })
food.forEach(food, number) => { console.log(number); console.log(food)};


//challenge
// create a list with an array of movies
//use .forEach() to list your movies
//add another movie at the end
//and replace one of your existing movies with another one


let list = ['Pirates of the Carribean', 'Star Wars', 'Pulp Fiction', 'American Psycho'];
list.forEach(list => { console.log(list)})

let movies = ['Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'Obi Wan', 'Force Awakens'];
movies.push('Force Awakens')
movies.splice(3,1, 'Obi Wan')
movies.forEach(f => { console.log(f) })

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(typeof colors.toString())
colors.forEach(c => console.log(c)) // blue green yellow red orange purple

/*
challenge:
first check if you are working with an array
then flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
using a method only, print the values of the newly arranged array
*/

let thisArray = ['hello', 'this', 'is', 'an', 'array'];
console.log(typeof thisArray);

let arr = [1,2,3,4,5]
if (arr instanceof Array === true) {
    let revArr = arr.reverse()
    revArr.forEach(a => console.log(a))
}

