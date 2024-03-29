function my_Dictionary() {
    var Animal={
        Species: "Cat",
        Color: "White",
        Age: 3
    };
    delete Animal.Age;
    document.getElementById("Dictionary").innerHTML=Animal.Age;
}