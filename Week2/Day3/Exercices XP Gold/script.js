// Exercice 1

let family = {
    Fname_family : " John ",
    Lname_family : " Doe ",
    age : 25,
}

console.log (family)
console.log (family.Fname_family, family.Lname_family, family.age) 

// Exercice 2


var building = {
    number_levels : 4,
    number_of_apt_by_level : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    name_of_tenants : ["Sarah", "Dan", "David"],
    number_of_rooms_and_rent:  {
        "Sarah": [3, 2000],
        "Dan":  [4, 1000],
        "David": [1, 10],
    },
}

//Q1 

console.log (building.number_levels) 

//Q2

console.log( building.number_of_apt_by_level [1])
console.log(building.number_of_apt_by_level [3] )
console.log( building.number_of_apt_by_level [1] + building.number_of_apt_by_level [3] )

//Q3


console.log (building.name_of_tenants[1], building.number_of_rooms_and_rent["Dan"])

//Q4

console.log ((building.number_of_rooms_and_rent["Sarah"][1] + building.number_of_rooms_and_rent["David"][1])>building.number_of_rooms_and_rent["Dan"][1] )
console.log(building.number_of_rooms_and_rent["Dan"][1])


//Exercice 3

let bmi1;
let bmi2;




let pers1 = {
    fullName : "john",
    mass : 60,
    height : 180,
    
}
    
 

let pers2 ={
    fullName : "doe",
    mass : 80,
    height : 170,
   
}

function calculate(mass, height){

        let bmi =   (mass / (height * height) ) * 10000;
        let b =  bmi.toFixed(2);
        return b;
      }

 bmi1 = calculate(pers1.mass, pers1.height)
 console.log(bmi1);
 bmi2 = calculate(pers2.mass, pers2.height)
 console.log(bmi2);


if ( bmi1 > bmi2 ){

    console.log( "the bmi of john " + bmi1 + " was bigger than doe bmi " + bmi2)

} else if (bmi1 < bmi2) {

    console.log( "the bmi of doe " + bmi2 + " was bigger than john bmi " + bmi1)

} else {
    console.log ( "the bmi of john and doe are equal")
}
