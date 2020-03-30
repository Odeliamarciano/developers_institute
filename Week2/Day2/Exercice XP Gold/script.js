//Exercice 1

let nbr1 = prompt("Enter a Number");

if (nbr1 % 2 == 0){
    console.log(nbr1 + " is an even number");
}
else{
    console.log(nbr1 + " is not an even number");
}

//Exercice 2
let x = 6;

let y = 8;

if ((x>y) == true){
    console.log(x + " is bigger than " + y);
}
else if ((y>x) == true) { 
    console.log(y + " is bigger than " + x);
}

else {
    console.log(y + " and " + x + " was equal");
}

//Exercice 3

let lang = prompt("which language your speaks?");

let lang = lang.toLowerCase();
switch (lang) {
  case 'french':
    console.log("Bonjour");
  break;
  case 'english':
    console.log("Hello");
  break;
  case 'hebrew':
    console.log("Shalom");
    break;
  default:
    console.log(":)");
}

//Exercice 4

let grade = prompt("what is your grade ?");

if (grade>=90){
    console.log("A");
}
else if (80<grade && grade<90) { 
    console.log("B");
}

else if (70<grade && grade<80){
    console.log("C");
}

else {
    console.log("D");

}