

nbr = prompt ("Enter the numbers on bottle of beer");

function beer(nbr) {


  
        for(i=1;  ;i++){
        
            if (nbr>=i){

                    if (i<=1){

                        console.log( nbr + " bottles of beer on the wall " );
                        console.log( nbr + " bottles of beer on the wall " );
                        console.log( nbr + " bottles of beer");
                        console.log( "Take " + i + " down, pass it around" );
                        nbr = nbr - i;
                    } else {
                    
                        console.log(nbr + " bottles of beer on the wall " );
                        console.log(nbr + " bottles of beer on the wall " );
                        console.log( nbr + " bottles of beer");
                        console.log( "Take " + i + " down, pass it around" );
                        nbr = nbr - i;
                    
                     }

            } else{

                console.log(nbr + " bottles of beer on the wall " );
                console.log(nbr + " bottles of beer on the wall " );
                console.log( nbr + " bottles of beer");
                console.log("we can't continue we don't have enough bottles ")
                
                break;
            }   
        }
    }

    beer(nbr)
     
