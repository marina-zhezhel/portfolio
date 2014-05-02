"use strict";
function getUnique(arr) {
    var massRez=[];
    for (var i=0; i<arr.length; i++) {
        if (massRez.indexOf(arr[i])===-1) {
            massRez.push(arr[i]);
        }
    }
    return massRez;
}


