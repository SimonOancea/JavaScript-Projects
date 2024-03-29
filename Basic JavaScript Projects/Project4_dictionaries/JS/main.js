function my_Dictionary() { //THis is a KVP function
    var Animal={
        Species: "Cat",
        Color: "White",
        Age: 3
    };
    delete Animal.Age;
    document.getElementById("Dictionary").innerHTML=Animal.Age;
}