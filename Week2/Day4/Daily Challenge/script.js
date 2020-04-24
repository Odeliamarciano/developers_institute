let li = ["Hello", "World","in", "a", "frame" ]
function rec(li){
    
    for (i=0; i<li.len-1;i++){
        let t = 0;
        if (t<li.len[i]){
            t = li.len[i]
        }
        console.log("*" * (t+4));
        console.log();
        console.log('* {:<{}} *'.format(rec, size));
        console.log('*' * (size + 4));
    }
}

rec(li)