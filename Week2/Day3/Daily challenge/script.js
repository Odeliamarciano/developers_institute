let arr = [5,0,9,1,7,4,2,6,3,8];


let bubbleSort = () =>  {
    let len =arr.length;
    let arr2;
    for (let i = 0; i < len; i++) {
    
        if(arr[i] > arr[i+1]) {
        arr2 = arr[i]
        arr[i] = arr[i+1];
        arr[i+1] = arr2;
        }
    }
    console.log(arr)
}
           
  

   bubbleSort(arr)

   //console.log(arr.toString ())

   //console.log(arr.join())
   //console.log(arr.join("+"))
   //console.log(arr.join(""))
   //console.log(arr.join(" "))
   