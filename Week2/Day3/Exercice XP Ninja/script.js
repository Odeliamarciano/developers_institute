


//Create a local object called course that should contains the variables of the 3 first steps. Think about the structure of this object.
//Add the object course to the global object average
//Then ask the user if he wants to continue the process with a new course, grade, and coefficient.
//If the answer is “Yes”, than continue the process above from question 1 to 6
//If the answer is “No” than display him a message with his name and his semester average.
//Note: Calculation of the average ((Grade x Coefficient)/number of grades)




// let average = {

// }
//     function ask(){
        
//         let i = 1,

//         

//         while (i == 1){

//         let course = {
//         grade = prompt("what grade do you think you will have ?"),
//         coefficient = prompt("what is the coefficient of this course ?"),
//         answer = prompt ("do you want to continue the process with a new course, grade, and coefficient?")
//         }
//             if ( average.name = "" ){
        
//                 name = prompt("Enter your name")
                        
//             } else if ( average.name_of_the_course = "") {
        
//                 name_of_the_course = prompt("Enter the name of the course (Ex: Maths, Physics, etc…) ")
                        
//             } else if ( average.grade = ""){
        
//                 grade = prompt("what grade do you think you will have ?")
        
//             } else if (average.coefficient = ""){
        
//                 coefficient = prompt("what is the coefficient of this course ?")
        
//             } else { console.log("thanks for the ansewrs")  
//             }

//             if (average.answer = "no") {

//                 i = 2;

//             }else {

//                 i = 1;
//             }

//         }
    

  

//      ask(average); 

        

// sem = 
              
     // console.log( name + " your semester average is " + sem )-


    let name =  prompt("Enter your name");
    let name_of_the_course = prompt("Enter the name of the course (Ex: Maths, Physics, etc…) ");
    let grade = prompt("what grade do you think you will have ?");
    let coefficient = prompt("what is the coefficient of this course ?");
    let answer = prompt ("do you want to continue the process with a new course, grade, and coefficient?");

function Names(name, name_of_the_course)
{
        this.name = name;
        this.name_of_the_course = name_of_the_course;
}

function Ask(grade, coefficient, answer )
{
        
        this.grade = grade;
        this.coefficient = coefficient;
        this.answer = answer;
}
Names(name, name_of_the_course);
Ask(grade, coefficient, answer);