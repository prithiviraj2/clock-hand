
var t, n, temp1, temp2, k;
var hour, minutes, seconds;

for (t = 1; t < 12; t++) {
    n = 720 * t / 11;
    var n = Math.round(n * 100) / 100;
    hour = Math.floor(n / 60);

    minutes = Math.floor(n) % 60;

    // temp1 = n * 100;
    // temp2 = temp1 % 100;
    // seconds = Math.floor((temp2 * 60) / 100);

    document.write( (t) + ". hands overlap times " + hour + ":" + minutes   + "<br>" );
    k = t;
}

document.getElementById("count").innerHTML = "Count " + (k);
