var student = { name:"Peter", awesome: true, degree:"JavaScript" };

for(item of student) {
    console.log(item);
}

var catArray = [ 'tabby', 'burmese', 'tortie' ];

for(cat of catArray) {
    console.log(cat);
};

//Given the array
let heroes = [ 'Superman', 'Batman', 'Wonder Woman' ];

for(hero of heroes) {
    console.log(hero + " " + "is super cool!");
}



var heroArray = [ 'Superman', 'Batman', 'Wonder Woman' ];

for(hero of heroArray){
    console.log(`${hero} is super cool!`);
}