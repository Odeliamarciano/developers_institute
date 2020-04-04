let arr = []

function my_f(num){

arr.push(num.toString())
console.log(arr,'arr');

}


function calcul(){




let sum = '' ;

for(i=0; i <arr.length; i++){ 

    

    sum = sum + arr[i];
    i2 = i;
    console.log(sum,'sum');
}
console.log(eval(sum))