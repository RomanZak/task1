/**
 * Created by Romul on 24.11.2016.
 */
var arr=new Array(1e6);
for (i = 0; i < arr.length; i++) arr[i] = Math.floor(Math.random()*1e6);
console.log(arr);

function sortirovka(a,b) {
    if (a > b) return 1;
    if (a < b) return -1;
}; arr.sort(sortirovka);
console.log(arr);
console.log(arr.reverse());
function arrSum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
};
arrSum(arr);

// транспортна задача залишилася не вирішеною :(
var B= [40,60,80,60];
var C= [60,80,100];
var d=[];
for (var l=0; l< (B.length + C.length) - 1; l++) {
    if (B[0] < C[0]) {
        d[0] = B[0];
        C[0] -= B[0];

    } else {
        d[0] = C[0];
        B[0] -= C[0];

    }

    alert(d);
}

