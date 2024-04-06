function Vote_Function() {
    var Age, Can_Vote;
    Age=document.getElementById("Age").value;
    Can_Vote=(Age<18)? "You are not old enough":"You can vote";
    document.getElementById("Vote").innerHTML=Can_Vote;
}

function vehicle(make,model,year,color){
    this.vehicle_make=make;
    this.vehicle_model=model;
    this.vehicle_year=year;
    this.vehicle_color=color;
}
var Jack= new vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Emily drives a "+Emily.vehicle_color+" "+Emily.vehicle_model+" manufactured in "+Emily.vehicle_year;
}

function count_function(){
    document.getElementById("Counting").innerHTML=count();
    function count(){
        var starting=7;
        function plus_one(){
            starting+=1;
        }
        plus_one();
        return starting;
    }
}