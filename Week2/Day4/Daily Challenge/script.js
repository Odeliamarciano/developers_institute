//Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.
//For example the list [“Hello”, “World”, “in”, “a”, “frame”] gets printed as:

//let li = ["Hello", "World","in", "a", "frame" ],

//function rec(){
   
   //let size = 
   // for (max(len(rec))

   // } rec in rec)
   // print('*' * (size + 4))
    //for rec in rec:
      //  print('* {:<{}} *'.format(rec, size))
   // print('*' * (size + 4))
//}


let li = ["Hello", "World","in", "a", "frame" ],
function rec(){
    for (i=0; i<li.len-1;i++){
        let t =0;
        if (t<li.len[i]){
            t = li.len[i]
        }
        print ("*" * (t+4))
        print ()
        print('* {:<{}} *'.format(rec, size)
        print('*' * (size + 4));

    }

}


function printFrame(arr) {
    function fill (str, length, char) {
        return (str.length < length) ? fill(str + char, length, char) : str;
    }

    let size = arr.map((str) => {
            return str.length;
})
.reduce((a, b) => {
        return Math.max(a, b);
});

    let line = fill('', size + 4, '*');

    arr = arr.map((element) => {
            return '* '+ fill(element, size, ' ') + ' *';
})
    arr.unshift(line);
    arr.push(line);

    return arr.join('\n');;
}

console.log(printFrame(["Hello", "World", "in", "a", "frame"]));