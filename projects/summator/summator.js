"use strict";
function summ() {
    var sum=0;
    for(i=0; i<arguments.length; i++){
        sum+=parseFloat(arguments[i]);
    }
    return sum;
    
}
//summ(1,"2",3);