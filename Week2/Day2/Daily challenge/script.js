// let s1 = "This dinner is not so bad"; 
// let s1 = "This dinner is bad"; 
let s1 = "This movie is not that bad!";

if (s1.search("not") > 0 && s1.search("bad") > 0) {

    
    let sn = s1.indexOf("not");
    let sb = s1.indexOf("bad");

    if (sn<sb){
    console.log(s1.slice(0, sn) + "good" + s1.slice(sb + 3)) 

    }

}else {
    console.log(s1)
}






