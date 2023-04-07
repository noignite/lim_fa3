var n1 = document.getElementById("n1").innerHTML = Math.ceil(Math.random() * 20);
var n2 = document.getElementById("n2").innerHTML = Math.ceil(Math.random() * 20);
var n3 = document.getElementById("n3").innerHTML = Math.ceil(Math.random() * 20);

let max = Math.max(n1, n2, n3);

var n1n = document.getElementById("n1n").innerHTML;
var n2n = document.getElementById("n2n").innerHTML;
var n3n = document.getElementById("n3n").innerHTML;

var numn;

    if (n1 == max && n2 != max && n3 != max){
        numn = n1n;
    }

    if (n2 == max && n1 != max && n3 != max){
        numn = n2n;
    }

    if (n3 == max && n1 != max && n2 != max){
        numn = n3n;
    }

    if (n1 == max && n2 == max && n3 != max){
        numn = n1n + ", " + n2n;
    }

    if (n1 != max && n2 == max && n3 == max){
        numn = n2n + ", " + n3n;
    }

    if (n1 == max && n2 != max && n3 == max){
        numn = n1n + ", " + n3n;
    }


document.getElementById("hno").innerHTML = "The major island with the most number of players: " + numn + " (" + max + ")";

var abc = "ABCDEFGHIJKLMNOPQRST";
var x = abc.charAt(max - 1);

document.getElementById("ltr").innerHTML = "The name of the players mostly start with: " + x;

var time = n2 * n3;
var xhr = (time / 60);
var hr = Math.floor(xhr);
var xmin = (xhr - hr) * 60;
var min = Math.round(xmin);

document.getElementById("time").innerHTML = "The average time players use Roblox: (" + time + " minute/s): " + hr + "hour/s " + min + "minute/s";