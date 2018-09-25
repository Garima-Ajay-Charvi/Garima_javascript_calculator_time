var investForm = document.getElementById('form');

investForm.addEventListener('submit', function(e) {
    e.preventDefault();

//open in new page....window.location=('child_plan.html');

e.preventDefault();
var PA = document.getElementById("Principal").value;
var P_D = document.getElementById("Primium/Discount").value;
var Int = document.getElementById("Interest").value;
var Pay = document.getElementById("Payments").value;

var P = parseInt(PA)+parseInt(P_D);
//alert('Pri'+P)
var R = Int/100;
//alert('Inte'+R)
var RT =(Int/100)*Pay;
//alert('RT = '+RT)
var result1 = parseInt(P)*RT;
var result = parseInt(P)+result1;
document.getElementById('result').innerHTML=result;
});

function planPage() {
    window.location=('child_plan.html');
}