

nbr = prompt ("Enter the numbers on bottle of beer");

function beer(nbr) {


  
        for(i=1;  ;i++){
        
            if (nbr>i){

                    if (i<1){

                        console.log( nbr + " bottles of beer on the wall " );
                        console.log( nbr + " bottles of beer");
                        nbr = nbr - i;
                    } else 
                    if (i<2){

                        
                       
                        console.log(nbr + " bottles of beer on the wall " );
                        console.log( nbr + " bottles of beer");
                        console.log( "Take " + i + " down, pass it around" );
                        nbr = nbr - i;
                    } else {

                        
                        console.log(nbr + " bottles of beer on the wall " );
                        console.log(nbr + " bottles of beer on the wall " );
                        console.log( nbr + " bottles of beer");
                        console.log( "Take " + i + " down, pass them around" );
                        nbr = nbr - i;
                    }

            } else{

                console.log("we can't continue we don't have enough bottles ")
                break;
            }   
        }
    }
     
