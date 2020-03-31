let arr = [5,0,9,1,7,4,2,6,3,8];


let bubbleSort = () =>  {
    let len =arr.legth;
    let arr2;
    for (let i = 0; i < len; i++) {
        
            if((arr[i] > arr[i+1]) === true){
                arr2 = arr[i+1]
                arr[i] = arr[i+1];
                arr[i+1] = arr2;
            }
           }
            console.log(arr)
        }
           
  

   bubbleSort(arr)

   arr.toString ()

   arr.join()
   arr.join("+")
   arr.join("")
   arr.join(" ")
