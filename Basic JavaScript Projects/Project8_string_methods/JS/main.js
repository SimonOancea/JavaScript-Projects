//Using the .concat() method.
function full_sentence() {
    var part_1 = "Guess what day";
    var part_2 = "is...";
    var part_3 = "April Fools!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;

}
//Using the .slice() method.
function slice_Method() {
    var sentence = "Slice and Dice";
    var section = sentence.slice(11, 14);
    document.getElementById("Slice").innerHTML = section;
}

//Using the .toString() method.
function string_Method() {
    var myNumber = 777;
    document.getElementById("ToString").innerHTML = myNumber.toString();
}

//Using the .toPrecision() method.
function precision_method() {
    var myNumber = 123.4456789;
    document.getElementById("SpecificLength").innerHTML =
    myNumber.toPrecision(5);
}