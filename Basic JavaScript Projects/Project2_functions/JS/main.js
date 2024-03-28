function My_Function_1 () {
    var str="This is the button.";
    document.getElementById("Button_Text").innerHTML=str; // this function transform "Click me!" in "This is the button"
}

function My_Function_2 () {
    var sentence="I am learning";
    sentence += " when I read books!";
    document.getElementById("Concatenate").innerHTML=sentence; // this function transform "Click here!" in a sentence
}
