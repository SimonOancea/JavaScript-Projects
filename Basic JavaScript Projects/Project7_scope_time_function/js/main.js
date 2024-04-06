var x=1;

function add_1(){
    var x=2;
    document.write(5+x+"<br>");
}

function add_2(){
    document.write(x+3+"<br>");
    console.log(x);
}
add_1();
add_2();

function get_Date(){
    if (new Date().getHours()<18){
        document.getElementById("greeting").innerHTML="It is currently before 6pm.";
    }
}

function get_reply(){
    var user_input=document.getElementById("userInput").value;
    if(user_input%2==0){
        reply="You entered an even number!";
        document.getElementById("feedback").innerHTML=reply;
    }
    else{
        reply="You entered an odd number!";
        document.getElementById("feedback").innerHTML=reply;
    }
}

function time_function(){
    var time=new Date().getHours();
    var reply;
    if(time<12&&time>0){
        reply="It is morning time!";
    } else if(time>=12&&time<18){
        reply="It is afternoon!"
    } else {
        reply="It is evening time!"
    }
    document.getElementById("time_of_day").innerHTML=reply;
}
