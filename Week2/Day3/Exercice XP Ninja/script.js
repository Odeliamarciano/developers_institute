
function ask(){
        let i = 1
        while(i == 1){
                let average = new Object();
                average.grade = []
                average.coefficient = []  
                average.name =  prompt("Enter your name"),
                average.name_of_the_course = prompt("Enter the name of the course (Ex: Maths, Physics, etc…) "),
                average.grade = prompt("what grade do you think you will have ?"),
                average.coefficient = prompt("what is the coefficient of this course ?");     
                

                if (average.name_of_the_course == ""){

                        average.name_of_the_course = prompt("Enter the name of the course (Ex: Maths, Physics, etc…) ")
                }
                else if (average.grade == "" ){

                        average.grade = prompt("what grade do you think you will have ?")

                }else if (average.coefficient == ""){

                        average.coefficient = prompt("what is the coefficient of this course ?")
                }

                let coursethat = new Object();
                coursethat.name_of_the_course = average.name_of_the_course
                coursethat.grade = average.grade, 
                coursethat.coefficient = average.coefficient,

                (average.grade).push(coursethat.grade);
                (average.coefficient).push(coursethat.coefficient);
                // average = Object.assign(coursethat,average);
                console.log(average)
                answer = prompt("do you want to continue the process with a new course, grade, and coefficient?")

                if (answer == "yes"){
                        i = 1
                }else{
                        let sum = 0
                        for (let i = 0; i < (average.grade).length; i++) {
                                sum += average.grade[i] * average.coefficient[i]
                              }
                        console.log(average.name +"," + average.name_of_the_course + " your average are " + sum/(average.grade).length )
                        i = 0
                }
        }
}
    
ask()