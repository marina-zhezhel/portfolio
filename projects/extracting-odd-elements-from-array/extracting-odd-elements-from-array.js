"use strict";
function extractOddItems(arr) {
    var arr1=[];
    var j=0;
    for ( var i = 0; i < arr.length; i++) {
	    if (i%2!==0) {
         arr1[j]=arr[i];
         j++;
        }
        
    }
    return arr1;
}
//extractOddItems ([1,2,3,4,5,6,7,8,9]);