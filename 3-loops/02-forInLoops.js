let student = { name: "Jaime", awesome: true, course: "JavaScript" };
                                                      //Item refers to the keys being pulled out
for(item in student){
     console.log(item);  //key
    console.log(student[item]);
}

let catArray = [ 'tabby', 'burmese', 'ragdoll', 'tortie' ];
for(cat in catArray){
    console.log(cat);
}

/*
Challenge:
write a for in looop that capitalizes the first leter of a student's name
*/
//  let studentName = "Kellen"
//  for(studentName[0] == studentName.toUpperCase() {
//     var upper = name.charAt(0).toUpperCase() + name.substr(1);
//      console.log(upper);
//  };

 var name = "daVE";
 var capName;

 for(var letter in name) {
     if(letter ==0){
         capName = name[letter].toUpperCase();
     } else {
         capName += name[letter].toLowerCase();
     }
 }

 console.log(capName)