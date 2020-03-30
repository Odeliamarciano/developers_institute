//Exercice 1

let age = prompt("Enter your age");
if ( age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off")
} else if ( age == 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!")
} else {
    alert("Powering On. Enjoy the ride!")
}

//Exercice 2

var a = 2 + 2;                              // a = 4;

switch (a) {                                // a = 4;
  case 3:                                   // it's past this stap bacause 3 != to 4
    alert( 'Too small' );
    break;
  case 4:                                   // it's Enter to this case because a == 4 
    alert( 'Exactly!' );                    // it's going to show an alert with 'Exactly!' 
    break;
  case 5:                                   
    alert( 'Too large' );                    // it's past this stap bacause 5 != to 4
    break;
  default:
    alert( "I don't know such values" );    // it's past this stap bacause  4 != to another numbers 
}


//Exercice 3

let a = 2 + 2;                                      // a = 4;

switch (a) {
  case 4:                                           // it's Enter to this case because a == 4 
    alert('Right!');                                // it's going to show an alert with 'Right!' 
    break;

  case 3: // (*) grouped two cases                  // it's past this stap bacause 3 != to 4
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');        
}                                                   // it's finish the program 