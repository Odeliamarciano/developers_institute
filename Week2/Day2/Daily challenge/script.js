let s1 = "This dinner is not so bad"; 

let sn = s1.indexOf("not");
let sb = s1.indexOf("bad");

if (sn<sb){

console.log(s1.slice(0, sn) + "good" + s1.slice(sb + 3)) 

}
else {
    console.log(s1)
}


