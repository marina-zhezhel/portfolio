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

//var a = {};
//var b = {};
 
//var u = getUnique([a,b,b,a]);
//console.log(u[0] === a); // true
//console.log(u[1] === b); // true
//console.log(u.length === 2); // true

