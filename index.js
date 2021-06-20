var x = document.getElementById("data1");
var y = document.getElementById("data2");

var z = document.getElementById("range-slider");
var t = document.getElementById("range");
var k = document.getElementById("check");
var a;

z.addEventListener("input", display);
k.addEventListener("change", display);

function display() {
    var value = document.getElementById("range-slider").value;

    if (value == 0) {

        x.innerText = "10K";
        a = 8.00;
        t.style.width = "0%";
    } else if (value == 25) {
        x.innerText = "50K";
        a = 12.00;
        t.style.width = "25%";
    } else if (value == 50) {

        x.innerText = "100K";
        a = 16.00;
        t.style.width = "50%";
    } else if (value == 75) {

        x.innerText = "500K";
        a = 24.00;
        t.style.width = "75%";
    } else if (value == 100) {
        x.innerText = "1M";
        a = 36.00;
        t.style.width = "100%";
    }
    check();
    y.innerText = "$" + a.toFixed(2);
}


function check() {
    if (k.checked == true) {
        a = a - (0.25 * a);
    }
}