

//Assurez-vous que le code ci-dessus a une fonction appelée checkDriverAge (). Chaque fois que vous appelez cette fonction, 
//vous serez invité à indiquer l'âge. Utilisez la déclaration de fonction pour créer cette fonction.
//Vous remarquez l'avantage d'avoir checkDriverAge () au lieu de copier et coller la fonction à chaque fois?
let age = prompt("What is your age?");

function checkDriverAge(age) {



if (Number(age) < 18) {
alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
alert("Congratulations on your first year of driving. Enjoy the ride!");
}

}

checkDriverAge(age)



function checkDriverAge(age) {


    
    if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    
    }
    
    checkDriverAge(age)