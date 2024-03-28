function addition_Function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML=addition;
}

function substraction_Function() {
    var substraction=5-2;
    document.getElementById("Math-1").innerHTML=substraction;
}

function multiplication(){
    var multi=5*5;
    document.getElementById("Math-2").innerHTML=multi;
}

function division(){
    var div=10/5;
    document.getElementById("Math-3").innerHTML=div;
}

function more_math(){
    var simple=(1+2)*10/2-5;
    document.getElementById("Math-4").innerHTML=simple;
}

function modulus(){
    var mod=25%6;
    document.getElementById("Math-5").innerHTML=mod;
}

function negation(){
    var neg=7;
    document.getElementById("Math-6").innerHTML= -neg;
}

function increment() {
    var x=5;
    x++;
    document.getElementById("Math-7").innerHTML=x;
}

function decrement() {
    var y=3.44;
    y--;
    document.getElementById("Math-8").innerHTML=y;
}

window.alert(Math.random()*100);