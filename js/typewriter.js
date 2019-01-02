var i = 0;
var j = 0;
var txt = 'Codage101'; /* The text */
var txt1 = 'Everthing About Coding You Need!'; // Our Moto
var speed1 = 150; /* The speed/duration of the effect in milliseconds */
var speed2 = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed1);
    }
}

function typeWriter1() {
    if (j < txt1.length) {
        document.getElementById("demo2").innerHTML += txt1.charAt(j);
        j++;
        setTimeout(typeWriter1, speed2);
    }
}

$.when(typeWriter).done(function () {
    typeWriter1();
});