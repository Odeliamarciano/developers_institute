


//Create a local object called course that should contains the variables of the 3 first steps. Think about the structure of this object.
//Add the object courseto the global object average
//Then ask the user if he wants to continue the process with a new course, grade, and coefficient.
//If the answer is “Yes”, than continue the process above from question 1 to 6
//If the answer is “No” than display him a message with his name and his semester average.
//Note: Calculation of the average ((Grade x Coefficient)/number of grades)




let average = {

    name : prompt("Enter your name"),
    name_of_the_course : prompt("Enter the name of the course (Ex: Maths, Physics, etc…) "),
    grade : prompt("what grade do you think you will have ?"),
    coefficient : prompt("what is the coefficient of this course ?"),

    ask = () => {
        if ( average.name = "" ){
    
            name = prompt("Enter your name")
                    
        } else if ( average.name_of_the_course = "") {
    
            name_of_the_course = prompt("Enter the name of the course (Ex: Maths, Physics, etc…) ")
                    
        } else if ( average.grade = ""){
    
            grade = prompt("what grade do you think you will have ?")
    
        } else if (average.coefficient = ""){
    
            coefficient = prompt("what is the coefficient of this course ?")
    
        } else { console.log("thanks for the ansewrs")  
        }
        }
            
    }

     average.ask(); 

        

