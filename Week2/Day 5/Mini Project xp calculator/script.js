let arr = []

function my_f(num){

arr.push(num.toString())
console.log(arr,'arr');

}


function calcul(){
    let sum = ''
    let sum2 = ''
    let r = 0

    for(i=0; arr[i] != ('+'||'-'||'*'|| '/'); i++){ 

        sum += arr[i];
        i2 = i+2;
        console.log("sum " + sum);      
    }   
    if(arr[i]='+'||'-'||'*'|| '/'){

        for (i=i2; i < arr.length; i++){
        
        sum2 += arr[i]
        console.log("sum2 " + sum2)
        }
    }  
    
    
    if(arr[i] = '+'){

        r = parseInt(sum) + parseInt(sum2);
        console.log("sum " + sum)
        console.log("sum2 " + sum2)


    }else if (arr[i] = '-'){

        r = parseInt(sum) - parseInt(sum2);
        console.log("sum " + sum)
        console.log("sum2 " + sum2)

    }else if (arr[i] = '*'){

        r = parseInt(sum) * parseInt(sum2);
        console.log("sum " + sum)
        console.log("sum2 " + sum2)

    }else{

        r = parseInt(sum) / parseInt(sum2);
        console.log("sum " + sum)
        console.log("sum2 " + sum2)
    }

    console.log(r);

}










































// function calcul(num){

// for (num of num){

//         for(i=0; num[i] != '+'||'-'||'*'|| '%'; i++){ 

//             let sum = sum + num[i];
//             i2 = i;
//             console.log(sum,'sum');
            

//         }

//         for(i=i2+1; num[i] != '='; i++){

//             let sum2 = sum2 + num[i];
//         }
        
//         if(num[i2] = '+'){

//             let r = sum + sum2;

//         }else if (num[i2] = '-'){

//             r = sum - sum2;

//         }else if (num[i2] = '*'){

//             r = sum * sum2;

//         }else {

//             r = sum % sum2;
//         }

//         console.log(r);
//     }

// }



// // my_f = () => {

// // }

